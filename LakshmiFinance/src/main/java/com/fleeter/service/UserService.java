package com.fleeter.service;

import com.fleeter.entities.master.User;

public interface UserService {

	User retrieveUser(String username, String password);

}
