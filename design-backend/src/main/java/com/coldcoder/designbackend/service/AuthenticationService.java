package com.coldcoder.designbackend.service;

import com.coldcoder.designbackend.dto.*;
import com.coldcoder.designbackend.exceptions.ApplicationException;
import com.coldcoder.designbackend.models.User;
import com.coldcoder.designbackend.models.VerificationToken;
import com.coldcoder.designbackend.repositories.UserRepository;
import com.coldcoder.designbackend.repositories.VerificationTokenRepository;
import com.coldcoder.designbackend.security.JwtProvider;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class AuthenticationService {

    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private VerificationTokenRepository verificationTokenRepository;
    private AuthenticationManager authenticationManager;
    private JwtProvider jwtProvider;
    private RefreshTokenService refreshTokenService;

    @Transactional
    public RegisterUserResponse signup(RegisterUserRequest registerUserRequest) {
        User user = new User();

        user.setUsername(registerUserRequest.getUsername());
        user.setEmail(registerUserRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerUserRequest.getPassword()));
        user.setCreated(Instant.now());
        user.setEnabled(false);
        user = userRepository.save(user);

        // Todo: Integrate this with JMS service
        String token = generateVerificationToken(user);
        String verificationUrl = "http://localhost:8080/api/auth/accountVerification/" + token;
        System.out.println(">>>>>>>>>>>>>>>>>> Verification Link >>>>>>>>>>>>>>>>>>");
        System.out.println(verificationUrl);

        return RegisterUserResponse
                .builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .url(verificationUrl)
                .message("User has been registered successfully")
                .build();

    }

    private String generateVerificationToken(User user) {
        String token = UUID.randomUUID().toString();
        VerificationToken verificationToken = new VerificationToken();

        verificationToken.setToken(token);
        verificationToken.setUser(user);

        verificationTokenRepository.save(verificationToken);
        return token;
    }

    public void verifyAccount(String token) {
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findByToken(token);
        verificationToken.orElseThrow(() -> new ApplicationException("Invalid Token"));
        fetchUserAndEnable(verificationToken.get());
    }

    @Transactional
    public void fetchUserAndEnable(VerificationToken verificationToken) {
        String username = verificationToken.getUser().getUsername();
        User user = userRepository.findByUsername(username).orElseThrow(() -> new ApplicationException("User not " +
                "found " +
                "with name :" + username));
        user.setEnabled(true);
        userRepository.save(user);
    }

    public UserAuthenticationResponse login(LoginUserRequest loginUserRequest) {
        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                loginUserRequest.getUsername(), loginUserRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(usernamePasswordAuthenticationToken);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);
        return UserAuthenticationResponse.builder()
                .authenticationToken(token)
                .refreshToken(refreshTokenService.generateRefreshToken().getToken())
                .expiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()))
                .username(loginUserRequest.getUsername())
                .build();
    }

    public UserAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        refreshTokenService.validateRefreshToken(refreshTokenRequest.getRefreshToken());
        String token = jwtProvider.generateTokenWithUserName(refreshTokenRequest.getUsername());
        return UserAuthenticationResponse.builder()
                .authenticationToken(token)
                .refreshToken(refreshTokenRequest.getRefreshToken())
                .expiresAt(Instant.now().plusMillis(jwtProvider.getJwtExpirationInMillis()))
                .username(refreshTokenRequest.getUsername())
                .build();
    }

    public Availability checkUsernameAvailability(String username) {
        Availability isUsernameAvailable;
        User user = this.userRepository.findByUsername(username).orElse(
                null
        );
        isUsernameAvailable = user == null ? new Availability(true) : new Availability(false);
        return isUsernameAvailable;
    }


    public Availability checkEmailAvailability(String email) {
        Availability isEmailAvailable;
        User user = this.userRepository.findByEmail(email).orElse(
                null
        );
        isEmailAvailable = user == null ? new Availability(true) : new Availability(false);
        return isEmailAvailable;
    }


}
