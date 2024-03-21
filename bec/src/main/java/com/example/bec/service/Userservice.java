package com.example.bec.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bec.dto.Userdto;
import com.example.bec.model.User;
import com.example.bec.repository.Userrepo;

import io.micrometer.common.lang.NonNull;

@Service
public class Userservice {
    @Autowired
    private Userrepo userRepository;

   
    // newUser
    public User createUser(@NonNull User user) {
        // Encrypt the password before saving
       // user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // getUser
    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // getUsers
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // updateUser
    public User updateUser(@NonNull String email,Userdto updateRequest) {
        return userRepository.findByEmail(email)
                .map(existingUser -> {
                    existingUser.setUsername(updateRequest.getUsername());
                    existingUser.setEmail(updateRequest.getEmail());
                    existingUser.setPassword((updateRequest.getPassword()));
                    return userRepository.save(existingUser);
                })
                .orElseThrow(() -> new RuntimeException("User not found with this email: " + email));
    }

    // deleteUser
    public void removeUser(@NonNull Integer userId) {
        userRepository.deleteById(userId);
    }
}
