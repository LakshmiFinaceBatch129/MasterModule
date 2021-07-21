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

import com.fleeter.entities.role.RelationshipExecutive;
import com.fleeter.service.RelationshipExecutiveService;

@CrossOrigin("*")
@RestController
@RequestMapping("/relationshipExecutive")
public class RelationshipExecutiveController {

	@Autowired
	RelationshipExecutiveService relationshipExecutiveService;
	
	@PostMapping("/")
	public String registerUser(@RequestBody RelationshipExecutive relationshipExecutive) {
		
		relationshipExecutive.setRole("Relationship Executive");
		relationshipExecutiveService.saveUser(relationshipExecutive);
		return "Registered Successfully";
	}
	@GetMapping("/")
	public List<RelationshipExecutive> getUsers()
	{
		List<RelationshipExecutive> list=relationshipExecutiveService.retrieveUsers();
		return list;
	}
	@DeleteMapping("/{id}")
	public List<RelationshipExecutive> deleteUser(@PathVariable("id")int id)
	{
		return relationshipExecutiveService.removeUser(id);
	}
	@GetMapping("/{id}")
	public RelationshipExecutive editUser(@PathVariable("id")int id)
	{
		return relationshipExecutiveService.retrieveUser(id);
	}
	@PutMapping("/")
	public String updateUser(@RequestBody RelationshipExecutive relationshipExecutive)
	{
		relationshipExecutiveService.saveUser(relationshipExecutive);
		return "Data updated successfully";
	}
}
