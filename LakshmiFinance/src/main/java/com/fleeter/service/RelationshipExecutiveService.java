package com.fleeter.service;

import java.util.List;

import com.fleeter.entities.role.RelationshipExecutive;


public interface RelationshipExecutiveService {

	void saveUser(RelationshipExecutive relationshipExecutive);

	List<RelationshipExecutive> retrieveUsers();

	List<RelationshipExecutive> removeUser(int id);

	RelationshipExecutive retrieveUser(int id);
}
