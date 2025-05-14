package com.jens_hinger.oauth_mvp.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{email}")
    public Optional<User> getUserByEmail(@PathVariable String email) {
        return getUserByEmail(email);
    }
}
