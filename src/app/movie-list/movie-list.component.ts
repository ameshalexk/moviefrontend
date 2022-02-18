import { Component, OnInit } from '@angular/core';
// import { movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { AuthService } from '../auth.service';

// const value = localStorage.getItem('profanis_auth')

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public value: any = null;

  public movieList = [ // Test Data: MUST match fields in Eclipse model
    {
      id: 1,
      description: "Some Funny Movie",
      genre: "Comedy",
      name: "That Comedy Film",
      publishedYear: "2018",
    },

    {
      id: 2,
      description: "Some scary movie",
      genre: "Horror",
      name: "That Horror Film",
      publishedYear: "1983",
    },
  ];
  // checks: boolean = false;

  constructor(private movieListService: MovielistService, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.value = localStorage.getItem('profanis_auth');
    this.reloadMovieData();
  }

  reloadMovieData() {
    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        console.log("**Response ** " + response)
        // this.checks = response;
        // if (this.checks) {
        this.movieListService.getAllMovies(this.value).subscribe({
          next: (response) => {
            console.log("*** MOVIE RESPONSE *** : " + response)
            this.movieList = response
          }, // succeeds
          error: (error) => { console.log(error) }, // fails
          complete: () => (console.log("Completed")) //
        });
        // }
      }, // succeeds
      error: (error) => { console.log("****Errorr 1 *****" + error) }, // fails
      complete: () => (console.log("Completed")) //
    });


    // if (this.checks) {
    // this.movieListService.getAllMovies(value).subscribe({
    //   next: (response) => {
    //     this.movieList = response
    //   }, // succeeds
    //   error: (error) => { console.log("****Errorr 2 *****" + error) }, // fails
    //   complete: () => (console.log("Completed")) //
    // });
    // }

  }




}
