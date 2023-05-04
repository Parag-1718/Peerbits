import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class UsersComponent {

  userName!:string;
  users:string[]=[] ;

  adduser(name:string){
    if(name){
      this.users.push(name)
    }
      console.log(this.users);
  }
}
