package com.jens_hinger.oauth_mvp.exception;

public class UserExistsException extends Exception{
    public UserExistsException(String message) {
        super(message);
    }
}
