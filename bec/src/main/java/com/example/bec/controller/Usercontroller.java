package com.example.bec.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.dto.Userdto;
import com.example.bec.model.User;
import com.example.bec.service.Userservice;

import io.micrometer.common.lang.NonNull;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/users")
public class Usercontroller {
     @Autowired
    private Userservice userService;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@NonNull @RequestBody User user) {
        User createdUser = userService.createUser(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @GetMapping ("readUser/{email}")
   // @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        Optional<User> user = userService.getUserByEmail(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readUsers")
   // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PutMapping("updateUser/{email}")
   // @PreAuthorize("hasAuthority('USER') or hasAuthority('ADMIN')")
    public ResponseEntity<User> updateUser(@NonNull @PathVariable String email, @RequestBody Userdto updateRequest) {
        User updated = userService.updateUser(email, updateRequest);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteUser/{userId}")
   // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> removeUser(@NonNull @PathVariable Integer userId) {
        userService.removeUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
