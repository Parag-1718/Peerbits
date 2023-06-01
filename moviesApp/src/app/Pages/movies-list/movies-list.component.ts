import { Component } from '@angular/core';
import { PassSearchDataService } from 'src/app/Services/pass-search-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {

  posters: Array<any> = [];

  constructor(
    private moviesService: PassSearchDataService,
  ){}

  ngOnInit(){
    this.moviesService.getData().subscribe({
      next:(data:any)=>{
        this.posters = data;
      }
    })
    console.log('posters :>> ', this.posters);
  }
}
