package com.fleeter.entities.roles;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fleeter.entities.applicant.LoanApplicationForm;
import com.fleeter.entities.master.Person;
import com.fleeter.entities.master.User;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RelationshipExecutive extends User{
	
	@OneToOne(cascade = CascadeType.ALL)
	private Person person;

	

}

