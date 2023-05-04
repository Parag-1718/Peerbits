import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class UsersComponent {

  userName!:string;
  name:string = 'parmar'
  users:string[]=['parag'] ;
  displaytext:boolean = false;
  value:number;

  constructor(){
    this.value = Math.floor(Math.random()*5)
  }

  adduser(name:string){
    if(name){
      this.users.push(name)
    }
      console.log(this.users);
  }

  changeName(){
    this.name = 'name is changed'
  }
  onDestroy(){
    this.userName='';
    this.name=''
    this.users = []
  }

  toggle(){
    this.displaytext = !this.displaytext
  }
}
