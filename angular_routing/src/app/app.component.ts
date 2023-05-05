import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular_routing';

  constructor(
    private _userAuth:AuthService,
    private router:Router
  ){}

  displayLogin:boolean = false;

    ngOnInit(): void {
      this._userAuth.islogin.subscribe((data:boolean)=>{
        console.log(data);
      })
    }

    login(){
      this._userAuth.login();
      this.displayLogin = true;
    }
    logout(){
      this._userAuth.logout();
      this.displayLogin = false;
      this.router.navigate(['/']);
    }
}
