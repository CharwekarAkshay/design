package com.coldcoder.designbackend.security;

import com.coldcoder.designbackend.exceptions.ApplicationException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.security.*;
import java.security.cert.CertificateException;
import java.time.Instant;

import static io.jsonwebtoken.Jwts.parserBuilder;
import static java.util.Date.from;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class JwtProvider {

    private KeyStore keyStore;

    @Value("${jwt.expiration.time}")
    private Long jwtExpirationInMillis;

    @Value("${keystore.name}")
    private String keystoreName;

    @Value("${keystore.password}")
    private String keystorePassword;

    @Value("${keystore.alias}")
    private String keystoreAlias;

    @PostConstruct
    public void init() {
        try {
            keyStore = KeyStore.getInstance("JKS");
            InputStream resourceAsStream = getClass().getResourceAsStream(keystoreName);
            keyStore.load(resourceAsStream, keystorePassword.toCharArray());
        } catch (KeyStoreException | CertificateException | NoSuchAlgorithmException | IOException exception) {
            throw new ApplicationException("Exception occurred while loading keystore");
        }
    }

    public String generateToken(Authentication authentication) {
        org.springframework.security.core.userdetails.User principal =
                (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject(principal.getUsername())
                .setIssuedAt(from(Instant.now()))
                .signWith(getPrivateKey())
                .setExpiration(from(Instant.now().plusMillis(jwtExpirationInMillis)))
                .compact();
    }

    private PrivateKey getPrivateKey() {
        try {
            return (PrivateKey) keyStore.getKey(keystoreAlias, keystorePassword.toCharArray());
        } catch (KeyStoreException | NoSuchAlgorithmException | UnrecoverableKeyException e) {
            throw new ApplicationException("Exception occurred while retrieving public key from keystore");
        }
    }

    public boolean validateToken(String jwt) {
        parserBuilder().setSigningKey(getPublicKey()).build().parseClaimsJws(jwt);
        return true;
    }

    private PublicKey getPublicKey() {
        try {
            return keyStore.getCertificate(keystoreAlias).getPublicKey();
        } catch (KeyStoreException exception) {
            throw new ApplicationException("Exception occurred while retrieving public key from keystore");
        }
    }

    public String getUsernameFromJwt(String token) {
        Claims claims = parserBuilder()
                .setSigningKey(getPublicKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }
}