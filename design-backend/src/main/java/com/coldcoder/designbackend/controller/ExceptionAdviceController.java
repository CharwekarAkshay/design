package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.dto.ErrorResponse;
import com.coldcoder.designbackend.exceptions.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionAdviceController {
    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<ErrorResponse> handleGenericNotFoundException(NotFoundException e) {
        ErrorResponse response = ErrorResponse.builder()
                .exceptionKey(e.getExceptionKey())
                .exceptionMessage(e.getExceptionMessage())
                .fieldName(e.getFieldName())
                .build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @ExceptionHandler(value = BadCredentialsException.class)
    public ResponseEntity<ErrorResponse> handleBadCredentials(BadCredentialsException e) {
        ErrorResponse response = ErrorResponse.builder()
                .exceptionKey("PASSWORD_INCORRECT")
                .exceptionMessage(e.getMessage())
                .fieldName("password")
                .build();
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
    }
}
