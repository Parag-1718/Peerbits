import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  genders = ['male', 'female']
  submitForm!:FormGroup
  notAllowedName = ['parag'];

  get hobby(){
    return (<FormArray>this.submitForm.get('hobies')).controls
  }

 ngOnInit(): void {
   this.submitForm = new FormGroup({
    userData: new FormGroup({
     username: new FormControl(null,[Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
    }),
    gender : new FormControl('male'),
    hobies: new FormArray([])
   })
 }

 onFormSubmit(){
  console.log(this.submitForm);
  this.submitForm.reset();
  while(this.hobby.length){
    this.hobby.pop()
  }
  console.log(this.submitForm.controls);
 }

 isNotAllowed(control:FormControl) {
    if(this.notAllowedName.includes(control.value)){
      return { noallowed : true }
    }
    return null
 }

 onAddHobby(){

  (<FormArray>this.submitForm.get('hobies'))?.push(
    new FormControl(null, [Validators.required])
  )
 }

 emailNotAlloed(control: FormControl): Promise<any> | Observable<any> {
  const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'abc@abc.com'){
        resolve({emailNot:true})
      }
      resolve(null)
    },2000)
  })
  return promise
 }


}
