import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  constructor(
    private _user:UserServiceService
  ){}
  name:string = ''

    ngOnInit(): void {
      this._user.statusUpdated.subscribe((status) => {
          alert(status)
      })
    }

  adduser(){
    if(this.name){
      let userData = {
        name: this.name,
        status: 'active'
      }
      this._user.addUser(userData)
      this.name = ''
    }
    else{
      alert('Please enter a name')
    }
  }
}
