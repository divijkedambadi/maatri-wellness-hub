
package com.maatri.backend.services;

import com.maatri.backend.models.User;
import com.maatri.backend.repositories.UserRepository;
import com.maatri.backend.dtos.LoginRequest;
import com.maatri.backend.dtos.RegisterRequest;
import com.maatri.backend.dtos.AuthResponse;
import com.maatri.backend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtService jwtService;
    
    @Autowired
    private AuthenticationManager authenticationManager;
    
    public AuthResponse register(RegisterRequest request) {
        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already in use");
        }
        
        // Create new user
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setMobile(request.getMobile());
        user.setAge(request.getAge());
        user.setLocation(request.getLocation());
        
        userRepository.save(user);
        
        // Generate JWT token
        String token = jwtService.generateToken(user.getEmail());
        
        return new AuthResponse(token, user);
    }
    
    public AuthResponse login(LoginRequest request) {
        // Authenticate user
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        
        // Get user from database
        User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        
        // Generate JWT token
        String token = jwtService.generateToken(user.getEmail());
        
        return new AuthResponse(token, user);
    }
    
    public User getUserProfile(String token) {
        // Extract email from token
        String email = jwtService.extractUsername(token);
        
        // Get user from database
        return userRepository.findByEmail(email)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
