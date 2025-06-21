package com.polycruz.exception;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import com.polycruz.responseUtils.Message;

import lombok.Getter;


@Getter
public class PolycruzAuthException extends PolycruzException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final HttpStatus httpStatus = HttpStatus.UNAUTHORIZED;
	private final int httpCode = httpStatus.value();
	
	public PolycruzAuthException(String message) {
		super(message,new ArrayList<>());
	}
	
	public PolycruzAuthException(String message,String domain) {
		super(message,new ArrayList<>(),domain);
	}

	public PolycruzAuthException(String message, Throwable cause) {
		super(message,new ArrayList<>(), cause);
	}
	
	public PolycruzAuthException(String message, List<Message> messages) {
		super(message,messages);
	}
	
	public PolycruzAuthException(String message, List<Message> messages, Throwable cause) {
		super(message,messages,cause);
	}
	
	public PolycruzAuthException(String message, List<Message> messages,String domain) {
		super(message,messages,domain);
	}
	
	public PolycruzAuthException(String message, List<Message> messages,String domain, Throwable cause) {
		super(message,messages,domain,cause);
	}
}
