package com.fleeter.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.fleeter.entities.master.LoginRequest;
import com.fleeter.entities.master.User;
import com.fleeter.service.UserService;


@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService us;
	
	@PostMapping("/")
	public User getUser(@RequestBody LoginRequest login)
	{
		System.out.println(login.getUsername());
		User u= us.retrieveUser(login.getUsername(),login.getPassword());
		System.out.println(u.getRole());
		return u;
}
}
