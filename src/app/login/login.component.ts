import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationServiceService } from '../service/basic-authentication-service.service';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string="sanjeev";
  password:string="";
  invalidCredentials=false;

  constructor(private router:Router,private service:BasicAuthenticationServiceService) { }

  ngOnInit(): void {
  }
  onLogin():void{
    this.service.isValid(this.userName,this.password).subscribe(
      data=>{
        console.log(data);
        
        this.router.navigate(['welcome',this.userName]);
        this.invalidCredentials=false;
      },
      error=>{
        console.log(error);
        this.invalidCredentials=true;
      }
    )   
  }

}
