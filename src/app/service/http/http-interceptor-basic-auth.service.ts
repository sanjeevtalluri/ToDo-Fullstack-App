import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationServiceService } from '../basic-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuth:BasicAuthenticationServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
 
    let authHeaderString=this.basicAuth.authenticatedToken;
    let user=this.basicAuth.authenticatedUser;
    if(authHeaderString && user){
      req=req.clone({
        setHeaders:{
          Authorization:authHeaderString
        }
      }
        
      )      
    }

    return next.handle(req);
    
  }
}
