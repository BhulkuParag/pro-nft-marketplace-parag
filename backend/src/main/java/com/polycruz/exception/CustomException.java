package com.polycruz.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomException extends Exception {

	private static final long serialVersionUID = 1L;
	private String exceptionCode = ExceptionCode.CUSTOM_CODE ;
	private String description;
	
	public CustomException(String message) {
		super(message);
	}
	
	public CustomException(String message,String code) {
		super(message);
		this.exceptionCode = code;
	}
	
	public CustomException(String message,String code,String desc) {
		super(message);
		this.exceptionCode = code;
		this.description = desc;
	}

}
