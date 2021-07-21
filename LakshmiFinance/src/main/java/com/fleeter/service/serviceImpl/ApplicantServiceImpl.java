package com.fleeter.service.serviceImpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fleeter.entities.role.Applicant;
import com.fleeter.repository.ApplicantRepository;
import com.fleeter.service.ApplicantService;

@Service
public class ApplicantServiceImpl implements ApplicantService{

	@Autowired
	ApplicantRepository ar;
	
	@Override
	public void saveApplicant(Applicant applicant) {
		
		ar.save(applicant);
	}

	@Override
	public List<Applicant> retrieveApplicants() {
		return (List<Applicant>) ar.findAll();
	}

	@Override
	public List<Applicant> removeApplicant(int id) {
		ar.deleteById(id);
		return (List<Applicant>) ar.findAll();
	}

	@Override
	public Applicant retrieveApplicant(int id) {
		return ar.findById(id).get();
	}

}
