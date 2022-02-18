import { Component, OnInit } from '@angular/core';
// import { movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

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
  checks: boolean = false;

  constructor(private movieListService: MovielistService, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.reloadMovieData();
  }

  reloadMovieData() {

    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        this.checks = response;
      }, // succeeds
      error: (error) => { console.log(error) }, // fails
      complete: () => (console.log("Completed")) //
    });


    if (this.checks) {
      this.movieListService.getAllMovies().subscribe({
        next: (response) => {
          this.movieList = response
        }, // succeeds
        error: (error) => { console.log(error) }, // fails
        complete: () => (console.log("Completed")) //
      });
    }

  }




}
