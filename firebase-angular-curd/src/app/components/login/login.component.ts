import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/datatypes/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private router:Router, private authservice:AuthService
  ){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
    })
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
      return this.loginForm.get('password');
  }

  onLogin(data:any){
    if(this.loginForm.valid){
      console.log(data.value);
      this.authservice.login(data.value);
    }
  }

}
