package com.polycruz.utils;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Component
public class ResponseTransformer {

	public<T> TechResponse<T> transform(T data){
		return TechResponse.<T>builder().data(data).build();
	}
	
	public<T> TechResponse<T> transform(List<InformationMessage> errorMessages){		
		return TechResponse.<T>builder().informationMessage(errorMessages).build();
	}
	
	public<T> TechResponse<T> transform(String message, List<InformationMessage> errorMessages){
		if(CollectionUtils.isEmpty(errorMessages)) {
			return TechResponse.<T>builder().informationMessage(Arrays.asList(InformationMessageBuilder.build(null, message))).build();
		}else {
			return TechResponse.<T>builder().informationMessage(errorMessages).build();
		}
	}

	public<T> TechResponse<T> transform(String message, List<InformationMessage> errorMessages ,
										HttpStatus httpStatus){
		if(CollectionUtils.isEmpty(errorMessages)) {
			return TechResponse.<T>builder().informationMessage(Arrays.asList(InformationMessageBuilder.build(null, message)))
					.statusCode(String.valueOf(httpStatus.value())).timestamp(LocalDateTime.now()).build();
		}else {
			return TechResponse.<T>builder().informationMessage(errorMessages).build();
		}
	}
}
