package com.luciana.crudjava.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luciana.crudjava.model.Cat;
import com.luciana.crudjava.repository.CatRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/cats")
@AllArgsConstructor
public class CatController {

    private final CatRepository catRepository;

    @GetMapping
    public List<Cat> list() {
        return catRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Cat> create(@RequestBody Cat cat) {
        return ResponseEntity.status(HttpStatus.CREATED).body(catRepository.save(cat));
    }
}
