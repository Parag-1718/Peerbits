import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { user } from '../datatypes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth,
    private router:Router
  ) { }

  // login method
  login(user: user){
    this.fireauth.signInWithEmailAndPassword(user.email,user.password)
    .then((response)=>{
      if(response){
        alert('login successful')
        console.log("response: ", response );
        localStorage.setItem('token','true')
        this.router.navigate(['/dashboard']);
      }
    }).catch((error)=>{
        alert(error.message)
        this.router.navigate(['/login']);
    })
  }

  // sign in method
  signUp(user: user){
    this.fireauth.createUserWithEmailAndPassword(user.email, user.password)
    .then((response) =>{
      if(response){
        alert('sign up successful')
        this.router.navigate(['/login']);
      }
    })
    .catch((error) =>{
      alert('sign up failed')
      this.router.navigate(['/register']);
    })
  }

  // logout method
  logout(){
    this.fireauth.signOut().then(()=>{
        alert('logout successful')
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    })
  }
}
