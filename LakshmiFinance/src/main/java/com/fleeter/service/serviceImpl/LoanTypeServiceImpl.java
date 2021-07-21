package com.fleeter.service.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fleeter.entities.master.LoanType;
import com.fleeter.repository.LoanTypeRepository;
import com.fleeter.service.LoanTypeService;

@Service
public class LoanTypeServiceImpl implements LoanTypeService {

	@Autowired
	LoanTypeRepository ltr;
	
	@Override
	public void saveLoan(LoanType loanType) {
		ltr.save(loanType);
		
	}

	@Override
	public List<LoanType> getAllLoan() {
		return (List<LoanType>) ltr.findAll();
	}

	@Override
	public LoanType getLoan(int id) {
		return ltr.findById(id).get();
	}

	@Override
	public void updateLoan(LoanType loanType) {
	
		ltr.save(loanType);
		
	}

	@Override
	public void deleteLoan(int id) {
		
		ltr.deleteById(id);
		
	}

}
