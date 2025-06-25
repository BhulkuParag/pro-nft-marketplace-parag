package com.polycruz.responseUtils;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.polycruz.exception.PolycruzAuthException;
import com.polycruz.exception.PolycruzBusinessException;
import com.polycruz.exception.PolycruzResourceNotFoundException;
import com.polycruz.exception.PolycruzSystemException;

import lombok.RequiredArgsConstructor;

@ControllerAdvice
@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE)
public class PolycruzExceptionResponseHandler {
	
	private final ResponseConverter converter;
	
	@ExceptionHandler(PolycruzBusinessException.class)
	public ResponseEntity<ApiResponse<Object>> handle(PolycruzBusinessException ex){
		return new ResponseEntity<>(converter.convert(ex.getMessage(),ex.getMessages()),ex.getHttpStatus());
	}
	
	@ExceptionHandler(PolycruzAuthException.class)
	public ResponseEntity<ApiResponse<Object>> handle(PolycruzAuthException ex){
		return new ResponseEntity<>(converter.convert(ex.getMessage(),ex.getMessages()),ex.getHttpStatus());
	}
	
	@ExceptionHandler(PolycruzResourceNotFoundException.class)
	public ResponseEntity<ApiResponse<Object>> handle(PolycruzResourceNotFoundException ex){
		return new ResponseEntity<>(converter.convert(ex.getMessage(),ex.getMessages()),ex.getHttpStatus());
	}
	
	@ExceptionHandler(PolycruzSystemException.class)
	public ResponseEntity<ApiResponse<Object>> handle(PolycruzSystemException ex){
		return new ResponseEntity<>(converter.convert(ex.getMessage(),ex.getMessages()),ex.getHttpStatus());
	}
}
