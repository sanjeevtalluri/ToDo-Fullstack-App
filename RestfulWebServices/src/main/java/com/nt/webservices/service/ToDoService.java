package com.nt.webservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.nt.webservices.beans.ToDo;

@Service
public class ToDoService {
	private static List<ToDo> list=new ArrayList<ToDo>();
	private static int counter=0;
	
	static {
		list.add(new ToDo(++counter, "sanjeev", "Learn Angular", new Date(), false));
		list.add(new ToDo(++counter, "sanjeev", "Learn Microservices", new Date(), false));
		list.add(new ToDo(++counter, "sanjeev", "Learn React", new Date(), true));
	}
	
	public List<ToDo> findAll(){
		return list;
	}
	
	public ToDo findById(int id) {
		for(ToDo todo:list) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}

	public ToDo save(ToDo todo) {
		// TODO Auto-generated method stub
		return null;
	}

	

	public ToDo deletedById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
