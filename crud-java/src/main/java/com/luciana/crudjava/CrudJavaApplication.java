package com.luciana.crudjava;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.luciana.crudjava.model.Cat;
import com.luciana.crudjava.repository.CatRepository;

@SpringBootApplication
public class CrudJavaApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudJavaApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CatRepository catRepository) {
		return args -> {
			catRepository.deleteAll();
			Cat kitty = new Cat();
			kitty.setName("Cotton candy");
			kitty.setPersonality("Chill");
			catRepository.save(kitty);
		};
	}

}
