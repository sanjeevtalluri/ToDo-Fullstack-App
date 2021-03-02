import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationServiceService {

  constructor(private http:HttpClient) { }
  
  isValid(userName:string,password:string){
    let authHeaderString='Basic '+ window.btoa(userName+':'+ password);
    let headers=new HttpHeaders({
      Authorization:authHeaderString
    }
      
    )
    return this.http.get<AuthenticationBean>(
      'http://localhost:8080/basicAuth',
      {headers}
    ).pipe(
      map(
        data=>{
          console.log("in map");
          sessionStorage.setItem('userSession',userName);
          sessionStorage.setItem('token',authHeaderString);
          return data;
        }
      )
     
    ); 
}

  get authenticatedUser(){
    console.log(sessionStorage.getItem('userSession'));
    return sessionStorage.getItem('userSession');

  }
  get authenticatedToken(){
    console.log(sessionStorage.getItem('token'));
    if(this.authenticatedUser){
      return sessionStorage.getItem('token');
    }
    
  }
  isUserLoggedIn(){
    let loggedIn=sessionStorage.getItem('userSession');
    return  !( loggedIn=== null);
  }
  logOut(){
    sessionStorage.removeItem('userSession');
    sessionStorage.removeItem('token');
  }
  
} 
export class AuthenticationBean{
  constructor(public message:string){}
}
