package com.coldcoder.designbackend.controller;

import com.coldcoder.designbackend.dto.LoginUserRequest;
import com.coldcoder.designbackend.dto.RegisterUserRequest;
import com.coldcoder.designbackend.dto.UserAuthenticationResponse;
import com.coldcoder.designbackend.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

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
}
