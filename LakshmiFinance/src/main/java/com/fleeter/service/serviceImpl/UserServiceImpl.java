package com.fleeter.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fleeter.entities.master.User;
import com.fleeter.repository.UserRepository;
import com.fleeter.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository ur;

	
	@Override
	public User retrieveUser(String username, String password) {
		return ur.findByUsernameAndPassword(username, password);
	}

}
