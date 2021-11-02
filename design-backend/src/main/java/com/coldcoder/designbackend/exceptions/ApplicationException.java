package com.coldcoder.designbackend.exceptions;

public class ApplicationException extends RuntimeException {
    public ApplicationException(String exceptionMessage) {
        super(exceptionMessage);
    }
}
