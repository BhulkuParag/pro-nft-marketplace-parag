package com.polycruz.utils;

import org.slf4j.*;
import static java.util.Objects.nonNull;
import java.util.Map;
import org.apache.commons.collections4.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

public class URIUtil {
	
	private static final Logger log = LoggerFactory.getLogger(URIUtil.class);
	
	private URIUtil() {}
	
	public static UriComponentsBuilder getUriBuilder(String uri, Map<String,Object> queryParams) {
		try {
			UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString(uri);
			if(MapUtils.isNotEmpty(queryParams)) {
				queryParams.forEach((paramName,paramValue) ->{
					if(nonNull(paramName) && nonNull(paramValue)) {
						uriBuilder.queryParam(paramName,paramValue);
					}
					
				});
			}
			return uriBuilder;
		}catch (Exception e) {
			String Message = String.format("ERROR =%s || uri =%s || queryParams = %s", e.getMessage(), uri,
					MapperUtil.formatToPretty(queryParams));
			log.error(Message,e);
			throw e;
		}
	}

	public static UriComponents getUriComponents(String uri,Map<String,String> pathParams) {
		try {
			return UriComponentsBuilder.fromUriString(uri).buildAndExpand(pathParams);
		}catch (Exception e) {
			String message = String.format("ERROR =%s || uri =%s || pathParams = %s",e.getMessage(),uri,
					MapperUtil.formatToPretty(pathParams));
			log.error(message,e);
			throw e;
		}
	}
	
	
}
