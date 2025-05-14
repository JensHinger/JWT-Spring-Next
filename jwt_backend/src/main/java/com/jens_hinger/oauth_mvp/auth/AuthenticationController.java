package com.jens_hinger.oauth_mvp.auth;

import org.springframework.boot.autoconfigure.session.RedisSessionProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

    private final AuthenticationService service;

    public AuthenticationController(AuthenticationService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationReponse> register (
            @RequestBody RegisterRequest request
    ) throws Exception {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationReponse> authenticate (
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
