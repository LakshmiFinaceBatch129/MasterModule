package com.fleeter.service;

import java.util.List;

import com.fleeter.entities.master.LoanType;

public interface LoanTypeService {

	void saveLoan(LoanType loanType);

	List<LoanType> getAllLoan();

	LoanType getLoan(int id);

	void updateLoan(LoanType loanType);

	void deleteLoan(int id);
	
}
