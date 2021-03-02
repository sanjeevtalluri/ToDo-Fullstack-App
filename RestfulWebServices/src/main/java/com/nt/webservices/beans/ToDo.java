package com.nt.webservices.beans;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ToDo {
	@Id
	@GeneratedValue
	private Integer id;
	private String userName;
	private String description;
	private Date targetDate;
	private boolean status;	
}
