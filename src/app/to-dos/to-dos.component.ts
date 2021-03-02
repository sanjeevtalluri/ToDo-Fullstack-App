import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class ToDo{
  constructor(public id:number,public description:string,public targetDate:Date,public status:boolean){}
}
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})

export class ToDosComponent implements OnInit {
  todos:ToDo[];
  message:string;

  constructor(private todoDataService:TodoDataService,private router:Router) { }

  ngOnInit(): void {
    this.refresh();
   
  }
  update(id:number){
    this.router.navigate(['todos',id]);
  }
  refresh(){
    this.todoDataService.retrieveAllTodos('sanjeev').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      }
    )
  }

  create(){
    this.router.navigate(['todos',-1]);
  }

  delete(id:number){
    this.todoDataService.deleteToDo('sanjeev',id).subscribe(
      response=>{
        console.log(response);
        this.message=`ToDo of id ${id} deletion is successful`;
        this.refresh();
      }
    )
  

  }

}
