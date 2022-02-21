import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MovielistService } from '../movielist.service';
import { UsersMovie } from '../usersMovie';

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.css']
})
export class MyProgressComponent implements OnInit {
  myProgressTitle = 'My Progress'
  movieDuration = 2.5 // placeholder value

  displayVal:number = 0
  displayVal2:number = 0

  public usersMovie: UsersMovie[] = []
  public value: any = null

  getValue(num:number){
    this.displayVal = num;
  }

  getValue2(num:number){
    this.displayVal2 = num
  }

  calculateSpinnerPercentage(displayVal:number, movieDuration:number){
    this.displayVal/movieDuration * 100;
  }

  displayCalculatedVal = this.calculateSpinnerPercentage;

  constructor(public authService: AuthService, private movieListService: MovielistService) { }
  // able to pull in users movies, use for loop to check movielist.id == userid 

  ngOnInit(): void {
    this.value = localStorage.getItem('profanis_auth');
    this.reloadMovieData();
  }
  checks: boolean = false;
  reloadMovieData() {
    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        // console.log("**Response ** " + response)
        this.checks = response;
        // if (this.checks) {
        this.movieListService.getMoviesByUser(this.value).subscribe({
          next: (response) => {
            // console.log("*** MOVIE RESPONSE *** : " + response)
            this.usersMovie = response
          }, // succeeds
          error: (error) => { console.log(error) }, // fails
          complete: () => (console.log("Completed")) //
        });
        // }
      }, // succeeds
      error: (error) => { console.log("****Errorr 1 *****" + error) }, // fails
      complete: () => (console.log("Completed")) //
    });

  }
}
