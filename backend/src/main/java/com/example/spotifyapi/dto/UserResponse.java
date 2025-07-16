package com.tuempresa.tuapp.dto;

public class UserResponse {
    private String spotifyId;
    private String displayName;
    private String email;

    public UserResponse() {}

    public UserResponse(String spotifyId, String displayName, String email) {
        this.spotifyId = spotifyId;
        this.displayName = displayName;
        this.email = email;
    }

    // Getters y Setters
}
