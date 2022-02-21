import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MovielistService } from '../movielist.service';
import { UsermoviesService } from '../usermovies.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.css']
})
export class MyProgressComponent implements OnInit {
  myProgressTitle = 'My Progress'
  movieDuration = 2.5 // placeholder value

  displayVal: number = 0
  displayVal2: number = 0

  public usersMovie: any = []
  public value: any = null
  public userName: any = null
  public userId: any = null

  getValue(num: number) {
    this.displayVal = num;
  }

  getValue2(num: number) {
    this.displayVal2 = num
  }

  calculateSpinnerPercentage(displayVal: number, movieDuration: number) {
    this.displayVal / movieDuration * 100;
  }

  displayCalculatedVal = this.calculateSpinnerPercentage;

  constructor(public authService: AuthService, private movieListService: MovielistService, private usersMovieService: UsermoviesService, public userService: UsersService) { }
  // able to pull in users movies, use for loop to check movielist.id == userid 

  ngOnInit(): void {
    this.value = localStorage.getItem('profanis_auth');
    this.userName = localStorage.getItem('admin');
    this.reloadMovieData();
  }
  checks: boolean = false;
  reloadMovieData() {

    this.userService.getUserByName(this.userName, this.value).subscribe({
      next: (response) => {
        console.log(response)
        let as: any = response;
        this.userId = as.id;
      },
      error: (error) => { console.log(error) }

    });


    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        // console.log("**Response ** " + response)
        this.checks = response;
        // if (this.checks) {
        this.usersMovieService.getUserMovies(this.value).subscribe({
          next: (response) => {
            console.log(response)
            let res: any = response;
            console.log(this.userId)
            res.map((e: any) => {
              console.log(e)
              let valObj = e.user.id;
              console.log(valObj)
              if (this.userId === valObj) {
                this.usersMovie.push(e)
                console.log(e.progress)
              }
            })
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

  disCheck(e: any) {
    // e.stopPropagation()
    console.log(e._elementRef.nativeElement.id)

    switch (e._elementRef.nativeElement.id) {
      case 'COMPLETED':
        return e.value = 100;
        break;
      case 'IN_PROGRESS':
        return e.value = 50;
        break;
      default:
        return e.value = 10;
        break;
    }
  }
}