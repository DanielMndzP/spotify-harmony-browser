package com.tuempresa.tuapp.dto;

public class TokenResponse {
    private String accessToken;
    private String refreshToken;
    private String tokenType;
    private int expiresIn;

    public TokenResponse() {}

    public TokenResponse(String accessToken, String refreshToken, String tokenType, int expiresIn) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
    }

    // Getters y Setters
}
