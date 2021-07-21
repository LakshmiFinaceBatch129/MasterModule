package com.fleeter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.role.RelationshipExecutive;

@Repository
public interface RelationshipExecutiveRepository extends CrudRepository<RelationshipExecutive, Integer>{

}
