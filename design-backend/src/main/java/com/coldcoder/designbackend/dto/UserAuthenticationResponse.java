package com.coldcoder.designbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAuthenticationResponse {
    private String authenticationToken;
    private String refreshToken;
    private Long expiresIn;
    private String username;
}
