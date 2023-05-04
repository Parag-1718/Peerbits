import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userCreatedStatus = true;
  userIsCreated = ''
  userName = ''
  isUserCreated = false;
  users = ['']

  constructor(){
    setTimeout(() => {
        this.changeUserCreatedStatus()
    }, 2000);
  }

  changeUserCreatedStatus(){
    this.userCreatedStatus = false
  }

  changeUserIsCreated(){
    if(this.userName){
      this.isUserCreated = true
      this.users.push(this.userName)
      // console.log(this.users);
    }else{
      this.userIsCreated = 'no user is ceated'
    }
  }

  getUserName(event:Event){
      console.log((event.target as HTMLInputElement).value);
      this.userName = (event.target as HTMLInputElement).value
      console.log((event.target as HTMLInputElement).innerHTML);
      this.userName = (event.target as HTMLInputElement).innerHTML
  }
}
