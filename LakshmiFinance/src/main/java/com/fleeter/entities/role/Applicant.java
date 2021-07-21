package com.fleeter.entities.role;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

import com.fleeter.entities.master.Person;
import com.fleeter.entities.master.User;

@Entity
public class Applicant extends User
{
	@OneToOne(cascade=CascadeType.ALL)
	private Person person;
	private String aadhar;
	private String pan;
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	
}
