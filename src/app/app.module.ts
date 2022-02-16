import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { environment } from 'src/environments/environment.prod';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateMovieFormComponent } from './create-movie-form/create-movie-form.component';
=======
import { HttpClientModule } from '@angular/common/http'; //need to import http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
>>>>>>> efd50a9b6cf3ae8ea825a1f212a90db00205f40b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    CreateMovieFormComponent
=======
    MovieListComponent
>>>>>>> efd50a9b6cf3ae8ea825a1f212a90db00205f40b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // used for doing API calls
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }


constructor(private angularAuth) {

}


