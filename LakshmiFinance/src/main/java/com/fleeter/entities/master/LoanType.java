package com.fleeter.entities.master;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LoanType {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String loanTitle;
	private String loanDetail;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLoanTitle() {
		return loanTitle;
	}
	public void setLoanTitle(String loanTitle) {
		this.loanTitle = loanTitle;
	}
	public String getLoanDetail() {
		return loanDetail;
	}
	public void setLoanDetail(String loanDetail) {
		this.loanDetail = loanDetail;
	}
	
}
