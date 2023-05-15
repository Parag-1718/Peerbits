import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs';
import { PlaceholderDirective } from 'src/app/Directives/placeholder.directive';
import { AlertModelComponent } from 'src/app/models/alert-model/alert-model.component';
import { AuthService } from 'src/app/services/auth.service';
import { CreateUserRequest } from 'src/datatypes';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error!: string;
  @ViewChild(PlaceholderDirective) alertHost!:PlaceholderDirective

  constructor(
    private _auth: AuthService, private componentFactoryResolver: ComponentFactoryResolver
    ) {}

  onSubmit(form: NgForm) {
    if (form.value.email && form.value.password) {
      this.isLoading = true;
      const userBody: CreateUserRequest = {
        email: form.value.email,
        password: form.value.password,
        returnSecureToken: true,
      };
      if (this.isLoginMode) {
        // request login

        this._auth.userLogin(userBody).subscribe({
          next: (res) => {
            console.log('response: ', res);
            this.isLoading = false;
          },
          error: (err) => {
            this.isLoading = false;
            // this.error = err;
            this.showAlert(err);
            console.log('err: ', err);
          },
        });
      } else {
        // request register
        console.log('register form: ', userBody);
        this._auth.createUser(userBody).subscribe({
          next: (res) => {
            console.log('response: ', res);
            this.isLoading = false;
            form.reset();
            this.isLoginMode = true;
          },
          error: (error) => {
            this.isLoading = false;
            this.error = error;
            // alert(error);
          },
        });
      }
    }
    form.control.markAllAsTouched();
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  closeError() {
    this.error = '';
  }

  showAlert(error: string){
    const alertComponent = this.componentFactoryResolver.resolveComponentFactory(AlertModelComponent)
    this.alertHost.viewContainerRef.clear();
    let alertCom =  this.alertHost.viewContainerRef.createComponent(alertComponent);
    alertCom.instance.message = error;
    alertCom.instance.closeBox.subscribe((res)=>{
      this.alertHost.viewContainerRef.clear();
    })
  }
}
