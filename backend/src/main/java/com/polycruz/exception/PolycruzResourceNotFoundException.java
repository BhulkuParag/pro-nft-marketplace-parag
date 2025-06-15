package com.polycruz.exception;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.polycruz.responseUtils.Message;

import lombok.Getter;

@Getter
public class PolycruzResourceNotFoundException  extends PolycruzException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final HttpStatus httpStatus = HttpStatus.NOT_FOUND;
	private final int httpCode = httpStatus.value();
	
	
	public PolycruzResourceNotFoundException(String message) {
		super(message,new ArrayList<>());
	}
	
	public PolycruzResourceNotFoundException(String message,String domain) {
		super(message,new ArrayList<>(),domain);
	}

	public PolycruzResourceNotFoundException(String message, Throwable cause) {
		super(message,new ArrayList<>(), cause);
	}
	
	public PolycruzResourceNotFoundException(String message, List<Message> messages) {
		super(message,messages);
	}
	
	public PolycruzResourceNotFoundException(String message, List<Message> messages, Throwable cause) {
		super(message,messages,cause);
	}
	
	public PolycruzResourceNotFoundException(String message, List<Message> messages,String domain) {
		super(message,messages,domain);
	}
	
	public PolycruzResourceNotFoundException(String message, List<Message> messages,String domain, Throwable cause) {
		super(message,messages,domain,cause);
	}
	
}
