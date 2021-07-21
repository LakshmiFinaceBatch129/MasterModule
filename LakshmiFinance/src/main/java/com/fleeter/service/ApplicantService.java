package com.fleeter.service;

import java.util.List;

import com.fleeter.entities.role.Applicant;

public interface ApplicantService {

	void saveApplicant(Applicant applicant);

	List<Applicant> retrieveApplicants();

	List<Applicant> removeApplicant(int id);

	Applicant retrieveApplicant(int id);
}
