import { Component } from '@angular/core';
import { UserServiceService } from './services/user-service.service';
import { user } from './models/datatypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_services';

  users?:user[] ;
  constructor(
    private _user:UserServiceService
  ) {}

  ngOnInit() {
    this.users = this._user.users
  }
}
