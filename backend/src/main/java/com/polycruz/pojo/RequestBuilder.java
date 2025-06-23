package com.polycruz.pojo;

import java.util.Map;

import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.retry.support.RetryTemplate;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RequestBuilder<T,U> {
	
	private String url;
	private T payload;
	private Class<U> responseType;
	private HttpMethod method;
	private Map<String,String> headers;
	private Map<String,Object> queryParams;
	private Map<String,String> pathParams;
	private RestTemplate restTemplate;
	private RetryTemplate retryTemplate;
	private Boolean disableLogging;
	private Boolean enableRetry;
	
	
	

}
