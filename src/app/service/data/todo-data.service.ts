import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from'@angular/common/http';
import { ToDo } from 'src/app/to-dos/to-dos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  retrieveAllTodos(userName:string){

    return this.http.get<ToDo[]>(`http://localhost:8080/users/${userName}/todos`);
  }
 
  retrieveToDo(userName:string,id:number){
    return this.http.get<ToDo>(`http://localhost:8080/users/${userName}/todos/${id}`);
  }
  deleteToDo(userName:string,id:number){
    return this.http.delete(`http://localhost:8080/users/${userName}/todos/${id}`);

  }

  updateToDo(userName:string,id:number,todo:ToDo){
    return this.http.put(`http://localhost:8080/users/${userName}/todos/${id}`,todo);
  }
  createToDo(userName:string,todo:ToDo){
    return this.http.post(`http://localhost:8080/users/${userName}/todos`,todo);
  }


  
 
}
