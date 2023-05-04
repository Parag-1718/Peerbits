import { Injectable } from '@angular/core';
import { user } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  users: user[] = [
    { name:'John', status: 'active' },
    { name:'Jane', status: 'inactive' },
    { name:'Mary', status: 'active' },
    { name:'Mike', status: 'inactive' }
  ];

  addUser(user:user){
    this.users.push(user)
    console.log(" users data: "+ this.users);
  }

  updateUser(id:number){
    this.users[id]
  }
}
