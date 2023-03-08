package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Bike;
import com.example.demo.repository.BikeRepository;
import com.example.demo.service.BieService;


@RestController
@CrossOrigin("http://localhost:3000")
public class BikeController {
	  @Autowired
	  BikeRepository servicerepository;
	  @Autowired
	  BieService service;
	  
	  @GetMapping("/getB")
	  List<Bike> getList(){
		  return servicerepository.findAll();
	  }
	  @PostMapping("/postB")
	  public Bike create(@RequestBody Bike bk) {
		  return servicerepository.save(bk);
	  }
	  @GetMapping("/getB/{id}")
		  public Optional<Bike> getbyId(@PathVariable int id)
		  {
		  return service.getStudent(id);
		  }
	  @PutMapping("/putB/{id}")
	  public String updateDetails(@PathVariable int id,@RequestBody Bike bk)
	  {
		  if(servicerepository.existsById(id)) {
		      Bike bt=new Bike();
		      bt.setId(id);
		      bt.setManufacturer(bk.getManufacturer());
		      bt.setModel(bk.getModel());
		      bt.setMileage(bk.getMileage());
		      bt.setCc(bk.getCc());
		      bt.setGears(bk.getGears());
		      servicerepository.save(bt);
		      return "updated";
		  }
		  else
		  {
			  return "Id not exist";
		  }
	  }
	  @DeleteMapping("/deleteB/{id}")
	  public String delete(@PathVariable int id)
			  {
				  return service.deleteDetails(id);
			  }
	  
}
