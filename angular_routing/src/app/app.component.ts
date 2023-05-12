import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular_routing';
  showMenu = false;

  constructor(private _userAuth: AuthService, private router: Router) {}

  displayLogin: boolean = false;

  ngOnInit(): void {
    this._userAuth.islogin.subscribe((data: boolean) => {
      console.log(data);
    });

    this.router.events.subscribe((res: any) => {
      if (res.url) {
        this.getUserData();
      }
    });
  }

  login() {
    this._userAuth.login();
    this.displayLogin = true;
  }
  logout() {
    this._userAuth.logout();
    this.displayLogin = false;
    this.router.navigate(['/']);
  }

  getUserData() {
    let user = localStorage.getItem('userData: ');
    let userData = user && JSON.parse(user);
    // console.log("userData: ",userData.registered);
    if (userData && userData.registered === true) {
      this.showMenu = true;
    }
  }

  gotoAuth(){
    if(this.showMenu){
      localStorage.removeItem("userData: ");
      console.log('logout');
      this.showMenu = false
      this.router.navigate(['/auth']);
    }
    else{
      this.router.navigate(['/auth']);
      console.log('login');
    }
  }
}
