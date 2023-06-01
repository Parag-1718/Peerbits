
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PassSearchDataService } from 'src/app/Services/pass-search-data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {

  searchedText!: string;
  searchResult: Array<any> = [];


  @Output() text = new EventEmitter<any>();
  @Input() placeholder!: string;
  @Input() info!: string;

  constructor(
    private moviesService: PassSearchDataService,
    private router: Router,

  ) {
  }

  searchAction(text: string) {
    this.text.emit(text);
    this.searchedText = text;
    this.getSearchedData();
  }

  getSearchedData(){
    let params:any = {
    };

    if(this.searchedText){
      params.query = this.searchedText
    }
    this.moviesService.getSearchResults(params).subscribe({
      next:(response:any) =>{
        this.searchResult = response.results;
        this.moviesService.setData(this.searchResult);
        this.router.navigate(['/search']);
      }
    })
  }
}

