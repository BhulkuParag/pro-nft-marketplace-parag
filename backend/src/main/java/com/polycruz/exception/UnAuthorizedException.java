package com.polycruz.exception;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UnAuthorizedException extends CustomException {

	private static final long serialVersionUID = 1L;
	
	public UnAuthorizedException(String message) {
		super(message);
	}
	
	public UnAuthorizedException(String message,String code) {
		super(message,code);
	}

}