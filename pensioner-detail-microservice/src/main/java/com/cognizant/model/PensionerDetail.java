package com.cognizant.model;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PensionerDetail {	
	@Id
	private String aadhaarNumber;						// Entering the Aadhaar Number  of Pensioner
	private String name;								// Entering the name of Pensioner
	private String dateOfBirth;							// Entering the DOB of Pensioner
	private String panNumber;							// Entering the pan number of Pensioner
	private double salary;								// Entering the Salary of Pensioner
	private double allowance;							// Entering the Allowance of Pensioner
	private String pensionType;							// Entering the Pension Type of Pensioner
	@Embedded
	private BankDetail bankDetail;


}
