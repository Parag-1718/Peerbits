import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { user } from '../models/datatypes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  // users?:user[];
  @Input() name?:string;
  @Input() status?:string;
  constructor(
    private _user:UserServiceService
  ){}

    ngOnInit(): void {
      // this.users = this._user.users
    }

    getStatus(){
      if(this.status==='active'){
        return 'green';
      }
      return 'red';
    }
}
