package com.example.spotifyapi.dto;

public class UserResponse {
    private Long id;
    private String spotifyId;
    private String displayName;
    private String email;

    public UserResponse() {}

    public UserResponse(Long id, String spotifyId, String email, String displayName) {
        this.id = id;
        this.spotifyId = spotifyId;
        this.displayName = displayName;
        this.email = email;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getSpotifyId() {
        return spotifyId;
    }
    
    public void setSpotifyId(String spotifyId) {
        this.spotifyId = spotifyId;
    }
    
    public String getDisplayName() {
        return displayName;
    }
    
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
}