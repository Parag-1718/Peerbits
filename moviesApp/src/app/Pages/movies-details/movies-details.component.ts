import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassSearchDataService } from 'src/app/Services/pass-search-data.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent {

  moviesDetails:any;
  id:any;

  constructor(
    private moviesService: PassSearchDataService,
    private activatedRoute: ActivatedRoute
  ){
   this.id =  activatedRoute.snapshot.params['id'];
   this.getData(this.id)
  }

  getData(id: string){
    this.moviesService.getSearchDeatils(id).subscribe({
      next:(data:any)=>{
        this.moviesDetails = data;
        console.log('moviesDetails :>> ', this.moviesDetails);
      }
    })
  }
}
