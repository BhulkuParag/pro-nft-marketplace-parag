package com.polycruz.exception;

public class ValidationException extends CustomException {
    private static final long serialVersionUID = 1L;
    private String exceptionCode = ExceptionCode.VALIDATION_CODE;
    private String description;
    private String fieldName;

    public ValidationException(String message) {
        super(message);
    }

    public ValidationException(String message, String fieldName, String code) {
        super(message, code);
        this.exceptionCode = code;
        this.fieldName = fieldName;
    }

    public String getExceptionCode() {
        return this.exceptionCode;
    }

    public String getFieldName() {
        return this.fieldName;
    }
}