import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //need to import http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule // used for doing API calls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
