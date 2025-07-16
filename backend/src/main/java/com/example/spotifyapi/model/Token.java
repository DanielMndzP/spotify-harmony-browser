package com.tuempresa.tuapp.model;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String accessToken;
    private String refreshToken;
    private Instant expiresAt;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters y Setters
}
