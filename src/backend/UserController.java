
package com.maatri.backend.controllers;

import com.maatri.backend.models.User;
import com.maatri.backend.services.UserService;
import com.maatri.backend.dtos.LoginRequest;
import com.maatri.backend.dtos.RegisterRequest;
import com.maatri.backend.dtos.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.login(request));
    }
    
    @GetMapping("/profile")
    public ResponseEntity<User> getProfile(@RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(userService.getUserProfile(token.replace("Bearer ", "")));
    }
}
