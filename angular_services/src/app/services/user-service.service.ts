import { Injectable, EventEmitter } from '@angular/core';
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

  statusUpdated:EventEmitter<string> = new EventEmitter<string>();

  addUser(user:user){
    this.users.push(user)
    console.log(" users data: "+ this.users);
  }

  updateUser(id:number, status:string){
    this.users[id].status = status
    this.statusUpdated.emit(status)
  }

  removeUser(id:number){
    this.users.splice(id, 1)
  }
}
