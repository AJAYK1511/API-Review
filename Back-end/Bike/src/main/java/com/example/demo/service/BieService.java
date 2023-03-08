package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Bike;
import com.example.demo.repository.BikeRepository;

@Service
public class BieService {
	@Autowired
	   BikeRepository repository;
	   public Optional<Bike> getStudent(int id){
		   return repository.findById(id);
	   }
	
	public String deleteDetails(int id) {
		if(repository.existsById(id))
		{
		repository.deleteById(id);
		return "deleted";
		}
		else
		{
			return "Id not exist";
		}
	}

}
