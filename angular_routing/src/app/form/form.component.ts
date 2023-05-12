import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  addForm!:FormGroup
  constructor(){
      this.addForm = new FormGroup({
        username: new FormControl(null, [Validators.required])
      })
  }

  addData(){
    console.log(this.addForm.value);
  }

  space(control:FormControl){
      if(control.value && control.value.includes('')){
        return { isSpace: true };
      }
      return null
  }
}
