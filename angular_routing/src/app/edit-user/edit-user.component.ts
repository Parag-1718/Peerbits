import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  constructor(
    private route: ActivatedRoute,
  ){}

  user!: {id:number, name:string}
  ngOnInit() {
    this.route.params.subscribe((data:Params)=>{
      console.log("data: " , data);
        this.user = {
          id: data['id'],
          name: data['name']
        }
    })
  }
}
