package com.coldcoder.designbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RegisterUserResponse {
    private String id;
    private String username;
    private String email;
    private Instant created;
    private String message;

    // Verification URL later it will connect with JMS
    private String url;
}
