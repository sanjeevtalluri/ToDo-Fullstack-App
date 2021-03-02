import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { ToDo } from '../to-dos/to-dos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private id:number;
  public todo:ToDo;

  constructor(private todoDataService:TodoDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.todo=new ToDo(this.id,"",new Date(),false);
    if(this.id!=-1){
      this.todoDataService.retrieveToDo('sanjeev',this.id).subscribe(
        data=>this.todo=data
      )
    }  
  }
  saveToDo(){
    if(this.id==-1){
      this.todoDataService.createToDo('sanjeev',this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
        }
      )

    }
    else{
      this.todoDataService.updateToDo('sanjeev',this.id,this.todo).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  
  }

}
