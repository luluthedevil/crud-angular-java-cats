package com.luciana.crudjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.luciana.crudjava.model.Cat;

@Repository
public interface CatRepository extends JpaRepository<Cat, Long> {

}
