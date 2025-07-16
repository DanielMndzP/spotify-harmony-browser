package com.example.spotifyapi.service;

import com.example.spotifyapi.model.Token;
import com.example.spotifyapi.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Service
public class TokenService {

    @Value("${spotify.client.id}")
    private String clientId;

    @Value("${spotify.client.secret}")
    private String clientSecret;

    private final TokenRepository tokenRepository;

    public TokenService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    public String getValidAccessToken(Token token) {
        if (token.getExpiresAt().isAfter(Instant.now())) {
            return token.getAccessToken();
        }

        // Token expirado, refrescar
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        String auth = Base64.getEncoder().encodeToString((clientId + ":" + clientSecret).getBytes());
        headers.set("Authorization", "Basic " + auth);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        Map<String, String> body = new HashMap<>();
        body.put("grant_type", "refresh_token");
        body.put("refresh_token", token.getRefreshToken());

        HttpEntity<Map<String, String>> request = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity("https://accounts.spotify.com/api/token", request, Map.class);

        String newAccessToken = (String) response.getBody().get("access_token");
        int expiresIn = (Integer) response.getBody().get("expires_in");

        token.setAccessToken(newAccessToken);
        token.setExpiresAt(Instant.now().plusSeconds(expiresIn));
        tokenRepository.save(token);

        return newAccessToken;
    }
}
