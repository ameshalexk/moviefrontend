import { Component, OnInit } from '@angular/core';
// import { movielist } from '../movielist';
import { MovielistService } from '../movielist.service';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';
import { UsermoviesService } from '../usermovies.service';

// const value = localStorage.getItem('profanis_auth')

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public value: any = null;
  public usernameValue: any = null;
  public checked: any = null;
  public final: any = {};
  public user: string = '';

  public movieList: any = [ // Test Data: MUST match fields in Eclipse model
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
  public selected: any = [];
  public selected2: any = [];
  // checks: boolean = false;
  // public final: any = {};

  constructor(private movieListService: MovielistService, public authService: AuthService, public userService: UsersService, public usermovies: UsermoviesService) {

  }

  ngOnInit(): void {
    this.checked = false;
    this.value = localStorage.getItem('profanis_auth');
    this.usernameValue = localStorage.getItem('admin');
    this.reloadMovieData();
  }

  reloadMovieData() {
    this.authService.isLoggedIn$.subscribe({
      next: (response) => {
        // console.log("**Response ** " + response)
        // this.checks = response;
        // if (this.checks) {
        this.movieListService.getAllMovies(this.value).subscribe({
          next: (response) => {
            // console.log("*** MOVIE RESPONSE *** : " + response)
            this.movieList = response
          }, // succeeds
          error: (error) => { console.log(error) }, // fails
          // complete: () => (console.log("Completed")) //
        });
        // }
      }, // succeeds
      error: (error) => { console.log("****Errorr 1 *****" + error) }, // fails
      complete: () => (console.log("Completed")) //
    });
  }

  // addChecked() {
  //   console.log("hi")
  //   this.movieList.forEach((e: any) => e['checked'] = false)
  // }





  // onCheck(val: any) {
  //   console.log(val)
  //   this.movieListService.getMovieById(val.id, this.value).subscribe({
  //     next: (response) => {
  //       // console.log("*** MOVIE RESPONSE *** : " + response.name)
  //       this.selected.push(response)
  //       // console.log(this.selected)
  //     }, // succeeds
  //     error: (error) => { console.log(error) }, // fails
  //     // complete: () => (console.log("Completed")) //
  //   });
  // }







  onCheck(val: any) {
    const index = this.selected2.indexOf(parseInt(val.name));
    if (val.checked && index === -1) {
      this.selected2.push(parseInt(val.name));
      this.movieListService.getMovieById(val.id, this.value).subscribe({
        next: (response) => {
          this.selected.push(response)
          console.log(this.selected)
        }, // succeeds
        error: (error) => { console.log(error) }, // fails
        // complete: () => (console.log("Completed")) //
      });
    } else {
      if (index > -1 && !val.checked) {
        console.log(this.selected)

        console.log(this.selected2)

        this.selected.splice(index, 1);
        this.selected2.splice(index, 1);
      }
    }
  }







  onCLicked(vals: any) {
    console.log(this.user)
  }
  onSave(val: any) {
    // val.map((e: any, idx: number) => {
    //   this.final['movie'] = e;

    // this.userService.getUserByName(this.usernameValue, this.value).subscribe({
    //   next: (response) => {
    //     console.log("*** USER RESPONSE *** : " + response)
    //     // this.selected.push(response)
    //     console.log(response)
    //     this.final['user'] = response;
    //     this.final['progress'] = 'COMPLETED';

    //     this.usermovies.addUserMovie(this.final, this.value).subscribe({
    //       next: (response) => {
    //         console.log("*** usermovies RESPONSE *** : " + response)
    //         console.log(response)
    //       }, // succeeds
    //       error: (error) => { console.log(error) }, // fails
    //       complete: () => (console.log("Completed")) //
    //     });
    //   }, // succeeds
    //   error: (error) => { console.log(error) }, // fails
    //   complete: () => (console.log("Completed")) //
    // });
    // console.log(this.final)
    // })
    // console.log(val)


    this.userService.getUserByName(this.usernameValue, this.value).subscribe({
      next: (response) => {
        // console.log("*** USER RESPONSE *** : " + response)
        // this.selected.push(response)
        console.log(response)
        let idVal: any = response;


        this.usermovies.deleteUserMovieById(idVal.id, this.value).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => { console.log(error) }
        })
      }, // succeeds
      error: (error) => { console.log(error) }, // fails
      // complete: () => (console.log("Completed")) //
    });


    for (let i = 0; i < val.length; i++) {
      let obj: any = {};
      obj['movie'] = val[i];
      // console.log(obj)




      this.userService.getUserByName(this.usernameValue, this.value).subscribe({
        next: (response) => {
          // console.log("*** USER RESPONSE *** : " + response)
          // this.selected.push(response)
          console.log(response)
          obj['user'] = response;
          obj['progress'] = 'COMPLETED';

          this.usermovies.addUserMovie(obj, this.value).subscribe({
            next: (response) => {
              // console.log("*** usermovies RESPONSE *** : " + response)
              // console.log(val[i])

            }, // succeeds
            error: (error) => { console.log(error) }, // fails
            // complete: () => (console.log("Completed")) //
          });
        }, // succeeds
        error: (error) => { console.log(error) }, // fails
        // complete: () => (console.log("Completed")) //
      });
      // console.log(this.final)
      // console.log(val)
      const { movie, ...rest } = obj;
    }
  }

  getUserId() {
    this.userService.getUserByName(this.usernameValue, this.value).subscribe({
      next: (response) => {
        // console.log("*** USER RESPONSE *** : " + response)
        // this.selected.push(response)
        // console.log(this.usernameValue)
      }, // succeeds
      error: (error) => { console.log(error) }, // fails
      complete: () => (console.log("Completed")) //
    });
  }

}
