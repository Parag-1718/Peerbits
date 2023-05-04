import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userId : number = 10
  userStatus : string =  ''

  constructor(){
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getUserDetails(){
    return this.userStatus
  }

  getUserStatus(){
    if(this.userStatus === 'offline'){
      return 'red'
    }
    return 'green'
  }
}
