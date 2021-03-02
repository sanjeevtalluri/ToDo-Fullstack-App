import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }
  isValid(userName:string,password:string){
    if(userName==='sanjeev'&&password==='talluri'){
      sessionStorage.setItem('userSession',userName);
      return true;
  }
  else{
    return false;
  }
  
}
  isUserLoggedIn(){
    let loggedIn=sessionStorage.getItem('userSession');
    return  !( loggedIn=== null);
  }
  logOut(){
    sessionStorage.removeItem('userSession');
  }
} 
