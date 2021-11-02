package com.coldcoder.designbackend.service;

import com.coldcoder.designbackend.dto.RegisterUserRequest;
import com.coldcoder.designbackend.exceptions.ApplicationException;
import com.coldcoder.designbackend.models.User;
import com.coldcoder.designbackend.models.VerificationToken;
import com.coldcoder.designbackend.repositories.UserRepository;
import com.coldcoder.designbackend.repositories.VerificationTokenRepository;
import lombok.AllArgsConstructor;
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

    @Transactional
    public void signup(RegisterUserRequest registerUserRequest) {
        User user = new User();

        user.setUsername(registerUserRequest.getUsername());
        user.setEmail(registerUserRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerUserRequest.getPassword()));
        user.setCreated(Instant.now());
        user.setEnabled(false);
        userRepository.save(user);

        String token = generateVerificationToken(user);
        System.out.println(">>>>>>>>>>>>>>>>>> Verification Link >>>>>>>>>>>>>>>>>>");
        System.out.println("http://localhost:8080/api/auth/accountVerification/" + token);
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
}
