package com.fleeter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fleeter.entities.role.Applicant;
import com.fleeter.service.ApplicantService;

@CrossOrigin("*")
@RestController
@RequestMapping("/applicant")
public class ApplicantController {

	@Autowired
	ApplicantService applicantService;
	
	@PostMapping("/")
	public String registerUser(@RequestBody Applicant applicant) {
		applicant.setRole("Applicant");
		applicantService.saveApplicant(applicant);
		return "Registered Successfully";
	}
	@GetMapping("/")
	public List<Applicant> getUsers()
	{
		List<Applicant> list=applicantService.retrieveApplicants();
		return list;
	}
	@DeleteMapping("/{id}")
	public List<Applicant> deleteUser(@PathVariable("id")int id)
	{
		return applicantService. removeApplicant(id);
	}
	@GetMapping("/{id}")
	public Applicant editUser(@PathVariable("id")int id)
	{
		return applicantService.retrieveApplicant(id);
	}
	@PutMapping("/")
	public String updateUser(@RequestBody Applicant applicant)
	{
		applicantService.saveApplicant(applicant);
		return "Data updated successfully";
	}
	
}
