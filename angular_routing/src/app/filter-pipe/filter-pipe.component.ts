import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent {

  filterValue: string = '';
   users:any = [
    {
      name: 'shiva',
      age: 30,
      email: 'shiv@example.com',
      joinDate: new Date('2020-05-08')
    },
    {
      name: 'ram',
      age: 25,
      email: 'ram@example.com',
      joinDate: new Date('2022-08-12')
    },
    {
      name: 'krishna',
      age: 40,
      email: 'krish@example.com',
      joinDate: new Date('2021-01-06')
    }
  ];
}
