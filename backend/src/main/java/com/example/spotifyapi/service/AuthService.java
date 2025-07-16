package com.tuempresa.tuapp.service;

import com.tuempresa.tuapp.dto.TokenResponse;
import com.tuempresa.tuapp.dto.UserResponse;
import com.tuempresa.tuapp.model.Token;
import com.tuempresa.tuapp.model.User;
import com.tuempresa.tuapp.repository.TokenRepository;
import com.tuempresa.tuapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.*;

@Service
public class AuthService {

    @Value("${spotify.client.id}")
    private String clientId;

    @Value("${spotify.client.secret}")
    private String clientSecret;

    @Value("${spotify.redirect.uri}")
    private String redirectUri;

    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    public AuthService(UserRepository userRepository, TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
    }

    public Map<String, Object> authenticate(String code) {
        // Intercambiar code por token
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String auth = Base64.getEncoder().encodeToString((clientId + ":" + clientSecret).getBytes());
        headers.set("Authorization", "Basic " + auth);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        Map<String, String> body = new HashMap<>();
        body.put("grant_type", "authorization_code");
        body.put("code", code);
        body.put("redirect_uri", redirectUri);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.postForEntity("https://accounts.spotify.com/api/token", request, Map.class);

        String accessToken = (String) response.getBody().get("access_token");
        String refreshToken = (String) response.getBody().get("refresh_token");
        int expiresIn = (Integer) response.getBody().get("expires_in");

        // Obtener datos del usuario desde Spotify
        HttpHeaders userHeaders = new HttpHeaders();
        userHeaders.setBearerAuth(accessToken);
        HttpEntity<String> userEntity = new HttpEntity<>(userHeaders);

        ResponseEntity<Map> userResponse = restTemplate.exchange(
                "https://api.spotify.com/v1/me", HttpMethod.GET, userEntity, Map.class);

        Map userInfo = userResponse.getBody();
        String spotifyId = (String) userInfo.get("id");
        String email = (String) userInfo.get("email");
        String displayName = (String) userInfo.get("display_name");

        // Guardar o actualizar usuario
        User user = userRepository.findBySpotifyId(spotifyId).orElse(new User());
        user.setSpotifyId(spotifyId);
        user.setEmail(email);
        user.setDisplayName(displayName);
        userRepository.save(user);

        // Guardar token
