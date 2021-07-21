package com.fleeter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fleeter.entities.master.LoanType;
import com.fleeter.service.LoanTypeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/loanType")
public class LoanTypeController {

	@Autowired
	LoanTypeService loanTypeService;
	
	@PostMapping("/")
	public String saveLoanDetails(@RequestBody LoanType loanType)
	{
		loanTypeService.saveLoan(loanType);
		return "Saved Successfully";	
	}
	@GetMapping("/")
	public List<LoanType> getAllLoanDetails()
	{
		List<LoanType> loans=loanTypeService.getAllLoan();
		return loans;
	}
	@GetMapping("/{id}")
	public LoanType getLoanDetails(@PathVariable("id")int id)
	{
		LoanType loan=loanTypeService.getLoan(id);
		return loan;
	}
	@PutMapping("/{id}")
	public String updateLoanDetails(@RequestBody  LoanType loanType)
	{
		loanTypeService.updateLoan(loanType);
		return "Updated Successfully";
	}
	@DeleteMapping("/{id}")
	public String deleteLoanDetails(@PathVariable("id")int id)
	{
		loanTypeService.deleteLoan(id);
		return "Deleted Successfully";
	}
}
