import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { MoviesListComponent } from './Pages/movies-list/movies-list.component';
import { MoviesDetailsComponent } from './Pages/movies-details/movies-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: MoviesListComponent
  },
  {
    path: 'search/:id',
    component: MoviesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
