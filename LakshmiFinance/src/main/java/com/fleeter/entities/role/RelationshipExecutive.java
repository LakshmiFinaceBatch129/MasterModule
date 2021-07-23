package com.fleeter.entities.role;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import com.fleeter.entities.master.Person;
import com.fleeter.entities.master.User;

@Entity
public class RelationshipExecutive extends User
{

	@OneToOne(cascade=CascadeType.ALL)
	private Person person;

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}
	
}
