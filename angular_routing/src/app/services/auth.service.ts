import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { CreateUserRequest } from 'src/datatypes';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  signUp = environment.singUp;
  key = environment.apiKey;
  loginUrl = environment.login;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  isLoggedIn:boolean = false;
  islogin:EventEmitter<boolean> = new EventEmitter<boolean>(false);

  login(){
    this.isLoggedIn = true;
    this.islogin.emit(true);
  }
  logout(){
    this.isLoggedIn = false;
    this.islogin.emit(false);
  }

  createUser(data:CreateUserRequest){
    return this.http.post(this.baseUrl + this.signUp, data ,{
      // params : new HttpParams().set('key', this.key)
    }).pipe(
      catchError((error) => {
        let errorMessage = error
        console.log(errorMessage);
      if(errorMessage === 'EMAIL_EXISTS'){
        errorMessage = 'Email already exists';
      }
        return throwError(()=> new Error(errorMessage))
      })
    )
  }

  userLogin(data:CreateUserRequest){
    return this.http.post(this.baseUrl + this.loginUrl, data,{
      params : new HttpParams().set('key', this.key)
    })
    .pipe(catchError((err)=>{
      let errorMessage = err.error.error.message
      return throwError(()=> new Error(errorMessage))
    }),tap(res=>{
      localStorage.setItem("userData: ", JSON.stringify(res));
      this.router.navigate(['/'])
    }))
  }

  isAuthenticated() {
   return this.isLoggedIn
  }
}
