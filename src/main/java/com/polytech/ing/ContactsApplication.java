package com.polytech.ing;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.polytech.ing.dao.ContactRepository;
import com.polytech.ing.entities.Contact;

@SpringBootApplication
public class ContactsApplication implements CommandLineRunner {
	@Autowired
	private ContactRepository contactRepository;

	public static void main(String[] args) {
		SpringApplication.run(ContactsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("khayati","iteb",df.parse("30/05/1991"),"khayati.iteb@gmail.com",52571357,""));
		contactRepository.save(new Contact("khayati","ghazi",df.parse("30/05/1993"),"khayati.ghazi@gmail.com",52671357,""));
		contactRepository.findAll().forEach(c->{
			System.out.println(c.getPrenom());
		});
		
	}

}
