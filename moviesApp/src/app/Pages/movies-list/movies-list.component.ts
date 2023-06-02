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

        this.posters.forEach((item, index)=>{
          let num = Math.floor(Math.random() * 360);
          item.img = `https://picsum.photos/id/${num}/300/400`
        })
      }
    })
    console.log('posters :>> ', this.posters);
  }

  addToFavorites(movie:any){
     console.log("object: ", movie);
  }
}
