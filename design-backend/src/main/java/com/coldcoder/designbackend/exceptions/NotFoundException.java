package com.coldcoder.designbackend.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NotFoundException extends RuntimeException {
    private String exceptionMessage;
    private String exceptionKey;
    private String fieldName;
}
