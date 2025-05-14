package com.jens_hinger.oauth_mvp.auth;

public class AuthenticationReponse {

    private String token;

    public AuthenticationReponse() {
    }

    public AuthenticationReponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
