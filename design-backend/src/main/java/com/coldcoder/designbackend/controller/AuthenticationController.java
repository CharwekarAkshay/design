package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.dto.LoginUserRequest;
import com.coldcoder.designbackend.dto.RefreshTokenRequest;
import com.coldcoder.designbackend.dto.RegisterUserRequest;
import com.coldcoder.designbackend.dto.UserAuthenticationResponse;
import com.coldcoder.designbackend.service.AuthenticationService;
import com.coldcoder.designbackend.service.RefreshTokenService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody RegisterUserRequest registerUserRequest) {
        authenticationService.signup(registerUserRequest);
        return new ResponseEntity<String>("User Registration Successful", HttpStatus.CREATED);
    }

    @GetMapping("/accountVerification/{token}")
    public ResponseEntity<String> verifyAccount(@PathVariable String token) {
        authenticationService.verifyAccount(token);
        return new ResponseEntity<String>("Account Activated Successfully", HttpStatus.ACCEPTED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserAuthenticationResponse> login(@RequestBody LoginUserRequest loginUserRequest) {
        UserAuthenticationResponse response = authenticationService.login(loginUserRequest);
        return new ResponseEntity<UserAuthenticationResponse>(response, HttpStatus.OK);
    }

    @PostMapping("/refresh/token")
    public ResponseEntity<UserAuthenticationResponse> refreshToken(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(
                authenticationService.refreshToken(refreshTokenRequest)
        );
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest) {
        refreshTokenService.deleteRefreshToken(refreshTokenRequest.getRefreshToken());
        return ResponseEntity.status(HttpStatus.OK).body("Refresh token Deleted Successfully !!");
    }
}
