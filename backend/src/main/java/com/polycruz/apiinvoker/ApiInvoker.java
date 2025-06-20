package com.polycruz.apiinvoker;

import com.polycruz.exception.PolycruzSystemException;
import com.polycruz.pojo.RequestBuilder;
import com.polycruz.utils.MapperUtil;
import com.polycruz.utils.NullResolver;
import com.polycruz.utils.URIUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.RecoveryCallback;
import org.springframework.retry.RetryCallback;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import java.util.Objects;
import java.util.Optional;
import java.util.StringJoiner;



@Component
@Slf4j
public class ApiInvoker {
	
	@Value("${logging.application.name:API-INVOKER}")
	private String applicationName;
	

	@Value("${logging.api-invoker.request-payload:true}")
	private boolean isReqLogPayloadEnabled;
	
	@Value("${logging.api-invoker.response-payload:true}")
	private boolean isResLogPayloadEnabled;
	
	public<T,U> ResponseEntity<U> invokeEntity(RequestBuilder<T,U> builder){
		
		ResponseEntity<U> response = null;
		String url = builder.getUrl();
		T payload = builder.getPayload();
		HttpHeaders header = new HttpHeaders();
		HttpMethod method = builder.getMethod();
		RestTemplate restTemplate = Optional.ofNullable(builder.getRestTemplate()).orElse(new RestTemplate());
		RetryTemplate retrtyTemplate = Optional.ofNullable(builder.getRetryTemplate()).orElse(new RetryTemplate());
		boolean isLogEnable = Objects.isNull(builder.getDisableLogging())? Boolean.TRUE : !builder.getDisableLogging();
		boolean isRetryEnable = BooleanUtils.isTrue(builder.getEnableRetry());
		validateRequest(builder);
		
		if(MapUtils.isNotEmpty(builder.getPathParams())) {
			url = URIUtil.getUriComponents(url,builder.getPathParams()).toUriString();
		}
		
		if(MapUtils.isNotEmpty(builder.getQueryParams())) {
			url = URIUtil.getUriBuilder(url,builder.getQueryParams()).toUriString();
		}
		
		if(MapUtils.isNotEmpty(builder.getHeaders())) {
			builder.getHeaders().forEach((k,v) -> header.add(k,v));
		}
		
		HttpEntity<T> entity = Optional.ofNullable(payload)
				.map(p -> new HttpEntity<>(payload,header))
				.orElse(new HttpEntity<>(header));
		
		logBeforeInvocation(isLogEnable,url,method,payload);
		
		if(isRetryEnable) {
			response = connect(url,method,entity,builder.getResponseType(),restTemplate,retrtyTemplate);
		}
		
		else {
			response = restTemplate.exchange(url,method,entity,builder.getResponseType());
		}
		logAfterInvocation(isLogEnable,response);
		return response;
		
	}
	
	private <T> ResponseEntity<T> connect(String url,HttpMethod httpMethod, HttpEntity<?> httpEntity,Class<?> className,RestTemplate restTemplate,RetryTemplate retryTemplate){
		
		ResponseEntity<T> responseEntity = null;
		
		//Retry callBack
		RetryCallback<ResponseEntity<T>,RuntimeException> retryCallback = retryContext -> {
			log.info ("[API-INVOKER] Retry Attempt {} ",retryContext.getRetryCount());
			return (ResponseEntity<T>) restTemplate.exchange(url,httpMethod,httpEntity,className);
		};
		
		//Recovery callback
		RecoveryCallback<ResponseEntity<T>> recoveryCallBack = retryContext -> {
			 if(Objects.nonNull (retryContext) && retryContext.getLastThrowable() instanceof HttpClientErrorException) {
				 HttpClientErrorException ex = ((HttpClientErrorException) retryContext.getLastThrowable());
				 log.warn ("[API-INVOKER] retry HttpClientErrorException, retryContext = {}",retryContext);
				 if(400 <= ex.getRawStatusCode() && ex.getRawStatusCode() < 500) {
					 throw new RestClientResponseException(ex.getMessage(),ex.getRawStatusCode(),ex.getStatusText(),null,ex.getResponseBodyAsByteArray(),null);
					 
				 }
			 }else {
				 log.error("[API-INVOKER] retry Exception, retryContext = {}", retryContext);
			 }
			return null;
		};
		responseEntity = retryTemplate.execute(retryCallback,recoveryCallBack);
		return responseEntity;
	}
	
	public <T,U> U invoke(RequestBuilder<T,U> builder) {
		return invokeEntity(builder).getBody();
	}
	
	
private <T> void logBeforeInvocation(boolean isLogEnable,String url,HttpMethod method, T payload) {
		
		if(isLogEnable) {
			StringBuilder logMessage = new StringBuilder("===========REQUEST==============\n");
			logMessage.append(" URL="+url).append("\n");
			logMessage.append(" Method= "+method).append("\n");
			String prettyPayload = MapperUtil.formatToPretty(payload);
			if(isReqLogPayloadEnabled && StringUtils.isNotBlank(prettyPayload)) {
				logMessage.append("Payload= ").append("\n").append(prettyPayload).append("\n");
			}
			log.info("[API-INVOKER] {}",logMessage);
		}
	
	}
	
	
	private <U> void logAfterInvocation(boolean isLogEnable,ResponseEntity<U> response) {
		if(isLogEnable) {
			StringBuilder logMessage = new StringBuilder("===========RESPONSE==============\n");
			logMessage.append(" Status Code ="+NullResolver.resolve(()-> response.getStatusCodeValue()).orElse(null)).append("\n");
			String prettyPayload = MapperUtil.formatToPretty(NullResolver.resolve(()-> response.getBody()).orElse(null));
			if(isResLogPayloadEnabled && StringUtils.isNotBlank(prettyPayload)) {
				logMessage.append("Response Body= ").append("\n").append(prettyPayload).append("\n");
			}
			log.info("[API-INVOKER] {}",logMessage);
		}
		
	}
	
	private <T,U> void validateRequest(RequestBuilder<T,U> builder) {
		StringJoiner joiner = new StringJoiner(" && ","[" + applicationName +"]","");
		boolean flag = true;
		if(StringUtils.isBlank(builder.getUrl())) {
			flag = true; joiner.add("Url should not be blank");}
		if(Objects.isNull(builder.getMethod())) {
			flag = true; joiner.add("http method is required");}
		if(Objects.isNull(builder.getResponseType())) {
			flag = true; joiner.add("Response Type is required");}
		if(flag) {
			throw new PolycruzSystemException(joiner.toString());
		
		}
	}
	

}
