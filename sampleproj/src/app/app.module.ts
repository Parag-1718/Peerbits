import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { HighlightTextDirectives } from './Directives/highlightText.directive';
import { RendererTextBgDirective } from './Directives/renderer-text-bg.directive';
import { PgIfDirective } from './Directives/pg-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    LocalReferenceComponent,
    HighlightTextDirectives,
    RendererTextBgDirective,
    PgIfDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
