package com.polycruz.exception;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.polycruz.responseUtils.Message;

import lombok.Getter;

@Getter
public class PolycruzBusinessException extends PolycruzException{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
	private final int httpCode = httpStatus.value();
	
	public PolycruzBusinessException(String message) {
		super(message,new ArrayList<>());
	}
	
	public PolycruzBusinessException(String message,String domain) {
		super(message,new ArrayList<>(),domain);
	}
	
	public PolycruzBusinessException(String message,String domain,String errorCode) {
		super(message,new ArrayList<>(),domain,errorCode);
	}

	public PolycruzBusinessException(String message, Throwable cause) {
		super(message,new ArrayList<>(), cause);
	}
	
	public PolycruzBusinessException(String message, List<Message> messages) {
		super(message,messages);
	}
	
	public PolycruzBusinessException(String message, List<Message> messages, Throwable cause) {
		super(message,messages,cause);
	}
	
	public PolycruzBusinessException(String message, List<Message> messages,String domain) {
		super(message,messages,domain);
	}
	
	public PolycruzBusinessException(String message, List<Message> messages,String domain, Throwable cause) {
		super(message,messages,domain,cause);
	}
	
}
