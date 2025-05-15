
package com.maatri.backend.dtos;

import com.maatri.backend.models.User;

public class AuthResponse {
    private String token;
    private Long userId;
    private String email;
    
    // Constructors
    public AuthResponse() {}
    
    public AuthResponse(String token, User user) {
        this.token = token;
        this.userId = user.getId();
        this.email = user.getEmail();
    }
    
    // Getters and Setters
    public String getToken() {
        return token;
    }
    
    public void setToken(String token) {
        this.token = token;
    }
    
    public Long getUserId() {
        return userId;
    }
    
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
}
