package com.nt.webservices.controller;

import java.net.URI;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.nt.webservices.beans.ToDo;
import com.nt.webservices.dao.ToDoJPARepo;
import com.nt.webservices.service.ToDoService;

import lombok.Data;

@RestController
@Data
@CrossOrigin(origins = {"http://localhost:4200"})
public class ToDoResource {
	@Autowired
	private ToDoJPARepo service;
	
	@GetMapping("/users/{userName}/todos")
	public List<ToDo> getAllToDos(@PathVariable String userName){
		return service.findByUserName(userName);
	}
	@GetMapping("/users/{userName}/todos/{id}")
	public ToDo getAllToDos(@PathVariable String userName,@PathVariable int id){
		return service.findById(id).get();
	}
	@DeleteMapping("/users/{userName}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String userName,@PathVariable int id){
		service.deleteById(id);
		
		return  ResponseEntity.noContent().build();
					
		
	}
	
	@PutMapping("/users/{userName}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String userName,@PathVariable int id, @RequestBody ToDo todo){
		
		ToDo todoUpdated=service.save(todo);
		return new ResponseEntity<ToDo>(todo,HttpStatus.OK);	
	}
	@PostMapping("/users/{userName}/todos")
	public ResponseEntity<ToDo> createToDo(@PathVariable String userName,@RequestBody ToDo todo){
        System.out.println(userName);
		todo.setUserName(userName);
		ToDo todoCreated=service.save(todo);
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(todoCreated.getId()).toUri();
		return ResponseEntity.created(uri).build();	
	}
}
