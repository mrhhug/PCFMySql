package com.webreadllc.PCFMySql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author michael
 */
@Entity // This tells Hibernate to make a table out of this class
public class Member {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String name;
    private String specialty;
    private boolean singer;

    public Member() {
    }
    
    public Member(Integer id) {
	this.id = id;
    }
    
    public Member(String name, String specialty, boolean singer) {
	this.name = name;
	this.specialty = specialty;
	this.singer = singer;
    }
    
    public Member(Integer id, String name, String specialty, boolean singer) {
	this.id = id;
	this.name = name;
	this.specialty = specialty;
	this.singer = singer;
    }
    
    public String getSpecialty() {
	return specialty;
    }

    public void setSpecialty(String specialty) {
	this.specialty = specialty;
    }  

    public boolean isSinger() {
	return singer;
    }

    public void setSinger(boolean singer) {
	this.singer = singer;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

    public Integer getId() {
	return id;
    }

    public void setId(Integer id) {
	this.id = id;
    }
}
