package com.example.bec.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bec.model.User;
@Repository
public interface Userrepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String username);
}
