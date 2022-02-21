import { Component, OnInit } from '@angular/core';
// import { movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

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
      publishedYear: "2018"
    },

    {
      id: 2,
      description: "Some scary movie",
      genre: "Horror",
      name: "That Horror Film",
      publishedYear: "1983"
    },
  ];

  checks: boolean = false;

  public selected: any = []

  constructor(private movieListService: MovielistService, public authService: AuthService, private fb: FormBuilder) {}
  

  // onCheckboxChange(e:any){
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  //   if (e.target.checked){
  //     checkArray.push(new FormControl(e.target.value))
  //   } else {
  //     var i = 0

  //     checkArray.controls.forEach((item: any) => {
  //       if(item.value == e.target.value){
  //         checkArray.removeAt(i)
  //         return;
  //       }
  //     })
  //     i++;
  //   }
  // }

  // submitForm(){
  //   // console.log(this.form.value)
  // }

  onChecked(checkedValue: any){
    this.selected.push(checkedValue.name);
    console.log(this.selected)
    console.log(checkedValue.name)
  }

  ngOnInit(): void {
    this.value = localStorage.getItem('profanis_auth');
    this.reloadMovieData();
  }

  reloadMovieData() {
    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        // console.log("**Response ** " + response)
        this.checks = response;
        // if (this.checks) {
        this.movieListService.getAllMovies(this.value).subscribe({
          next: (response) => {
            // console.log("*** MOVIE RESPONSE *** : " + response)
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
    // this.movieListService.getAllMovies(this.value).subscribe({
    //   next: (response) => {
    //     this.movieList = response
    //   }, // succeeds
    //   error: (error) => { console.log("****Errorr 2 *****" + error) }, // fails
    //   complete: () => (console.log("Completed")) //
    // });
    }


  }

