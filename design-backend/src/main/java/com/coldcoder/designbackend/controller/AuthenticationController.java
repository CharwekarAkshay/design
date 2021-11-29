package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.dto.*;
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
    public ResponseEntity<RegisterUserResponse> signup(@RequestBody RegisterUserRequest registerUserRequest) {
        RegisterUserResponse response = authenticationService.signup(registerUserRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
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

    @GetMapping("/usernameAvailability/{username}")
    public ResponseEntity<Availability> checkUsernameExist(@PathVariable String username) {
        Availability response = this.authenticationService.checkUsernameAvailability(username);
        return new ResponseEntity<Availability>(response, HttpStatus.OK);
    }

    @GetMapping("/emailAvailability/{email}")
    public ResponseEntity<Availability> checkEmailExist(@PathVariable String email) {
        Availability response = this.authenticationService.checkEmailAvailability(email);
        return new ResponseEntity<Availability>(response, HttpStatus.OK);
    }

    //https://dzone.com/articles/global-exception-handling-using-spring-restcontrol
}
