package com.jens_hinger.oauth_mvp.auth;

import com.jens_hinger.oauth_mvp.config.JwtService;
import com.jens_hinger.oauth_mvp.exception.UserExistsException;
import com.jens_hinger.oauth_mvp.user.Role;
import com.jens_hinger.oauth_mvp.user.User;
import com.jens_hinger.oauth_mvp.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationReponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found!"));
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationReponse(
                jwtToken
        );
    }

    public AuthenticationReponse register(RegisterRequest request) throws Exception {
        var userExist = repository.findByEmail(request.getEmail());
        if (userExist.isPresent()){
            throw new UserExistsException("User already exists!");
        }

        var user = new User(
            request.getFirstname(),
            request.getLastname(),
            request.getEmail(),
            passwordEncoder.encode(request.getPassword()),
            Role.USER
        );
        repository.save(user);
        // TODO maybe use a userDTO to pass on for the token generation -> as password does not need to go further
        return generateAuthenticationResponse(user);
    }

    private AuthenticationReponse generateAuthenticationResponse(User user){
        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationReponse(
                jwtToken
        );
    }
}
