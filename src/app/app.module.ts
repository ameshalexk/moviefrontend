import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //need to import http

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { MovieListComponent } from './movie-list/movie-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyProgressComponent } from './my-progress/my-progress.component';


@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,

    MovieListComponent,
    
    HomePageComponent,
          MyProgressComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MaterialModule,

    HttpClientModule // used for doing API calls

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
