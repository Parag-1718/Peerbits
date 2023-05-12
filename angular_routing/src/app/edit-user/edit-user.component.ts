import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AreYouSure } from '../services/guards/deactivate.guard';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements AreYouSure {
  constructor(private route: ActivatedRoute) {}

  wantToExit() {
    console.log(this.user);
    console.log(this.edituser);

    if (
      this.user.id !== this.edituser.id ||
      this.user.name !== this.edituser.name
    ) {
      if (confirm('sure you want to exit all changes will be lost!!')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  user!: { id: number; name: string };
  edituser!: { id: number; name: string };
  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      console.log('data: ', data);
      this.user = {
        id: data['id'],
        name: data['name'],
      };
    });

    this.edituser = { ...this.user };
  }
}
