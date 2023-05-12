import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  username:string = 'parag18'
  aboutUs:string = ''
  isFormSubmit = false;
  formData:any = {
    username:'',
    aboutUs:'',
    email:'',
    gender:''
  }










  
  @ViewChild('f') submitForm!:NgForm;

  onchange(){
    console.log(this.submitForm);
  }
  onFormSubmit() {
    console.log('form submitted',this.submitForm);
    this.formData.username = this.submitForm.value.userData.username;
    this.formData.email = this.submitForm.value.userData.email;
    this.formData.gender = this.submitForm.value.gender;
    this.formData.aboutUs = this.submitForm.value.aboutUs;

    console.log("formData: " , this.formData);
    this.isFormSubmit = true;
  }

  fillFormData() {
    // we can also use pathvalue to fill the specified data
    this.submitForm.setValue({
      userData:{
        username:'parag',
        email:'abc@example.com',
      },
      aboutUs:'about',
      gender:'male',
    })
  }
}
