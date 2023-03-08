package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bike {
  @Id
  private int id;
  private String Manufacturer;
  private String Model;
  private double cc;
  private double Mileage;
  private int gears;
  
  public Bike(int id,String Manufacturer,String Model,double cc,double Mileage,int gears)
  {
	  super();
	  this.id=id;
	  this.Manufacturer=Manufacturer;
	  this.Model=Model;
	  this.cc=cc;
	  this.Mileage=Mileage;
	  this.gears=gears;
  }
  public Bike()
  {
	  super();
	  
  }
 public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
 public String getManufacturer() {
	 return Manufacturer;
 }
 public void setManufacturer(String manufacturer) {
	 Manufacturer = manufacturer;
 }


public String getModel() {
	return Model;
}

public void setModel(String model) {
	Model = model;
}

public double getCc() {
	return cc;
}

public void setCc(double cc) {
	this.cc = cc;
}

public double getMileage() {
	return Mileage;
}

public void setMileage(double mileage) {
	Mileage = mileage;
}

public int getGears() {
	return gears;
}

public void setGears(int gears) {
	this.gears = gears;
}
	
}
