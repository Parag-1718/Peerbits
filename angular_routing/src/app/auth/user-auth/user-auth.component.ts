import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CreateUserRequest } from 'src/datatypes';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  isLoginMode:boolean = true;
  isLoading:boolean = false;
  error!: string;

  constructor(
    private _auth:AuthService
  ){}

  onSubmit(form:NgForm){
    if(form.value.email && form.value.password && form.valid){
      this.isLoading = true;
      const userBody:CreateUserRequest = {
          email : form.value.email,
          password: form.value.password,
          returnSecureToken : true
      }
      if(this.isLoginMode){
        // request login
        this._auth.userLogin(userBody).subscribe({
          next:(res)=>{
            console.log("response: ",res);
            this.isLoading = false;
          },
          error:(err)=>{
            this.error = err
            this.isLoading = false;
          }
        })
      }
      else{
        // request register
        console.log("register form: ", userBody);
        this._auth.createUser(userBody).subscribe(
          {next:(res)=>{
            console.log("response: ",res);
            this.isLoading = false;
            form.reset();
            this.isLoginMode = true;
          },
          error: (error) => {
            this.error = error
            this.isLoading = false;
            // alert(error.error.error.message);
          }
        }
        )
      }
    }
    form.control.markAllAsTouched();


  }

  onSwitch(){
    this.isLoginMode =!this.isLoginMode;
  }
}
