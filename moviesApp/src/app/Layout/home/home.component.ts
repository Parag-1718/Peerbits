import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { PassSearchDataService } from 'src/app/Services/pass-search-data.service';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, NgIf ,NgFor, CommonModule, RouterLink, IvyCarouselModule]
})
export class HomeComponent {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  bannerData: Array<any> = [];
  trendingMovies: Array<any> = [];
  actionMovies: Array<any> = [];


	constructor(config: NgbCarouselConfig,
    private movieService: PassSearchDataService
    ) {
		// customize default values of carousels used by this component tree
		config.interval = 2000;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
    config.showNavigationIndicators = false
	}

  ngOnInit(){
    this.getBannerData();
    this.TrendingData();
    this.actionData();
  }

  getBannerData(){
    this.movieService.getTrendingData().subscribe({
      next:(res:any)=>{
        this.bannerData = res.results;

        this.bannerData.forEach((item, index)=>{
          item.img = `https://picsum.photos/id/${index+100}/1400/600`
        })

      }
    })
  }

  TrendingData(){
    this.movieService.TrendingMoviesOfDay().subscribe({
      next: (data: any) => {
        this.trendingMovies = data.results
        this.trendingMovies.forEach((item, index)=>{
          item.img = `https://picsum.photos/id/${index+200}/900/1000`
        })
        console.log('data res:>> ', data);
      }
    })
  }

  actionData(){
    this.movieService.getActionMovies().subscribe({
      next: (data: any) => {
        this.actionMovies = data.results
        this.actionMovies.forEach((item, index)=>{
          item.img = `https://picsum.photos/id/${index+300}/900/1000`
        })
        console.log('data res:>> ', data);
      }
    })
  }
}
