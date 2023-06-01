import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Layout/home/home.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MoviesDetailsComponent } from './Pages/movies-details/movies-details.component';
import { MoviesListComponent } from './Pages/movies-list/movies-list.component';
import { SearchbarComponent } from './Layout/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MoviesDetailsComponent,
    MoviesListComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
