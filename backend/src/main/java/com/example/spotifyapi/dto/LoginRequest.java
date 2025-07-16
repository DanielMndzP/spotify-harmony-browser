package com.tuempresa.tuapp.dto;

public class LoginRequest {
    private String code;

    // Spotify envía el "code" en el callback
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
