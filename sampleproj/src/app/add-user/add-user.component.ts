import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

   userName!:string
   @Output() getUserName = new EventEmitter()

  adduser(Input:HTMLInputElement){
    // console.log(this.userName);
    console.log(Input.value);
    this.getUserName.emit(Input.value)
    // this.getUserName.emit(this.userName)
  }
}
