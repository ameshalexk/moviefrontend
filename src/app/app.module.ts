import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //need to import http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateMovieFormComponent } from './create-movie-form/create-movie-form.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { HomePageComponent } from './home-page/home-page.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MyProgressComponent } from './my-progress/my-progress.component';

import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    LoginComponent,
    CreateMovieFormComponent,
    NavBarComponent,
    MovieListComponent,
    HomePageComponent,
    NotfoundComponent,
    MyProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
