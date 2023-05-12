import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostComponent } from './post/post.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptor } from './services/auth.interceptor';
import { UserAuthComponent } from './auth/user-auth/user-auth.component';
import { LoadingSppinerComponent } from './shared/loading sppiner/loading-sppiner/loading-sppiner.component';
import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    HomeComponent,
    UserComponent,
    EditUserComponent,
    PageNotfoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormComponent,
    ShortenPipe,
    FilterPipeComponent,
    FilterPipe,
    PostComponent,
    UserAuthComponent,
    LoadingSppinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
