package com.example.spotifyapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String spotifyId;
    
    @Column(nullable = false)
    private String email;
    
    private String displayName;

    // Constructors
    public User() {}
    
    public User(String spotifyId, String email, String displayName) {
        this.spotifyId = spotifyId;
        this.email = email;
        this.displayName = displayName;
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
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getDisplayName() {
        return displayName;
    }
    
    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }
}