package com.fleeter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.role.Applicant;

@Repository
public interface ApplicantRepository extends CrudRepository<Applicant, Integer> {

}
