package com.fleeter.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.master.LoanType;

@Repository
public interface LoanTypeRepository extends CrudRepository<LoanType, Integer> {

}
