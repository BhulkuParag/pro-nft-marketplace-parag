package com.polycruz.exception;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PolycruzNotFoundException extends PolycruzException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -6409365956214608839L;

	public PolycruzNotFoundException(String message) {
		super(message,ExceptionCode.NOT_FOUND_CODE);
	}
	
	public PolycruzNotFoundException(String message,String desc) {
		super(message,ExceptionCode.NOT_FOUND_CODE);
	}

}
