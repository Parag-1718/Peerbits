import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/datatypes/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  signUpForm: FormGroup;
  constructor(
    private router:Router, private authService:AuthService
  ){
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(6)]),
    })
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
      return this.signUpForm.get('password');
  }
  onSignUp(data:any){
    if(this.signUpForm.valid){
      console.log("register : ",data);
      this.authService.signUp(data.value);
    }
    this.signUpForm.markAllAsTouched();
  }
}
