package com.fleeter.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fleeter.entities.role.RelationshipExecutive;
import com.fleeter.repository.RelationshipExecutiveRepository;
import com.fleeter.service.RelationshipExecutiveService;

@Service
public class RelationshipExecutiveServiceImpl implements RelationshipExecutiveService
{
	@Autowired
	RelationshipExecutiveRepository re;

	@Override
	public void saveUser(RelationshipExecutive relationshipExecutive) {
		re.save(relationshipExecutive);
		
	}

	@Override
	public List<RelationshipExecutive> retrieveUsers() {
		return (List<RelationshipExecutive>) re.findAll();
	}

	@Override
	public List<RelationshipExecutive> removeUser(int id) {
		re.deleteById(id);
		return (List<RelationshipExecutive>) re.findAll();
		
	}

	@Override
	public RelationshipExecutive retrieveUser(int id) {
		return re.findById(id).get();
	}

}
