import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  userToken: string = '';
  constructor() {
    let user =  localStorage.getItem("userData: ");
    let userData = user && JSON.parse(user)
    this.userToken = userData.idToken;
    console.log(this.userToken);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.userToken){
      const newRequest = request.clone({
        headers : new HttpHeaders({
          'auth': this.userToken
        })
       })
       return next.handle(newRequest);
    }else{
      return next.handle(request);
    }
  }
}
