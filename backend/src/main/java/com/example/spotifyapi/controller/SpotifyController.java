package com.example.spotifyapi.controller;

import com.example.spotifyapi.service.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/spotify")
@CrossOrigin(origins = "*")
public class SpotifyController {

    @Autowired
    private SpotifyService spotifyService;

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUserProfile(@RequestHeader("Authorization") String authHeader) {
        String accessToken = authHeader.replace("Bearer ", "");
        return ResponseEntity.ok(spotifyService.getCurrentUserProfile(accessToken));
    }

    // Puedes agregar más endpoints, como buscar canciones, etc.
}
