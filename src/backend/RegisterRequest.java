
package com.maatri.backend.dtos;

public class RegisterRequest {
    private String email;
    private String password;
    private String mobile;
    private Integer age;
    private String location;
    
    // Constructors
    public RegisterRequest() {}
    
    public RegisterRequest(String email, String password, String mobile, Integer age, String location) {
        this.email = email;
        this.password = password;
        this.mobile = mobile;
        this.age = age;
        this.location = location;
    }
    
    // Getters and Setters
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getMobile() {
        return mobile;
    }
    
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    
    public Integer getAge() {
        return age;
    }
    
    public void setAge(Integer age) {
        this.age = age;
    }
    
    public String getLocation() {
        return location;
    }
    
    public void setLocation(String location) {
        this.location = location;
    }
}
