package com.nt.webservices.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nt.webservices.beans.ToDo;

public interface ToDoJPARepo extends JpaRepository<ToDo, Integer> {
	List<ToDo> findByUserName(String userName);

}
