package com.polycruz.exception;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.polycruz.responseUtils.Message;

import lombok.Getter;

@Getter
public class PolycruzSystemException extends PolycruzException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
	private final int httpCode = httpStatus.value();
	
	
	public PolycruzSystemException(String message) {
		super(message,new ArrayList<>());
	}
	
	public PolycruzSystemException(String message,String domain) {
		super(message,new ArrayList<>(),domain);
	}

	public PolycruzSystemException(String message, Throwable cause) {
		super(message,new ArrayList<>(), cause);
	}
	
	public PolycruzSystemException(String message, List<Message> messages) {
		super(message,messages);
	}
	
	public PolycruzSystemException(String message, List<Message> messages, Throwable cause) {
		super(message,messages,cause);
	}
	
	public PolycruzSystemException(String message, List<Message> messages,String domain) {
		super(message,messages,domain);
	}
	
	public PolycruzSystemException(String message, List<Message> messages,String domain, Throwable cause) {
		super(message,messages,domain,cause);
	}
	
}