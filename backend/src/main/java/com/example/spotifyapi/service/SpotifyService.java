package com.example.spotifyapi.service;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SpotifyService {

    private final String SPOTIFY_API_BASE = "https://api.spotify.com/v1";

    public Object getCurrentUserProfile(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(accessToken);
        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<Object> response = restTemplate.exchange(
                SPOTIFY_API_BASE + "/me",
                HttpMethod.GET,
                entity,
                Object.class
        );

        return response.getBody();
    }
}
