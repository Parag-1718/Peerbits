import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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

  isAuthenticated() {
   return this.isLoggedIn
  }
}
