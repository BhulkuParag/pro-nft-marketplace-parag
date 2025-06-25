package com.polycruz.exception;

import java.util.ArrayList;
import java.util.List;

import com.polycruz.responseUtils.Message;

import lombok.Getter;

@Getter
public abstract class PolycruzException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private final List<Message> messages;
	private transient String domain;
	private transient String errorCode;
	
	public PolycruzException(String message) {
		super(message);
		messages = new ArrayList<>();
	}
	
	public PolycruzException(String message,String domain) {
		super(message);
		this.messages = new ArrayList<>();
		this.domain = domain;
	}

	public PolycruzException(String message, Throwable cause) {
		super(message, cause);
		this.messages = new ArrayList<>();
	}
	
	public PolycruzException(String message, List<Message> messages) {
		super(message);
		this.messages = messages;
	}
	
	public PolycruzException(String message, List<Message> messages, Throwable cause) {
		super(message,cause);
		this.messages = messages;
	}
	
	public PolycruzException(String message, List<Message> messages,String domain) {
		super(message);
		this.messages = messages;
		this.domain = domain;
	}
	
	public PolycruzException(String message, List<Message> messages,String domain, Throwable cause) {
		super(message,cause);
		this.messages = messages;
		this.domain = domain;
	}

	public PolycruzException(String message, List<Message> messages, String domain, String errorCode) {
		super(message);
		this.messages = messages;
		this.domain = domain;
		this.errorCode = errorCode;
	}
}
