import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movielist } from '../app/movielist';
import { UsersMovie } from './usersMovie'


@Injectable({
  providedIn: 'root'
})

export class MovielistService {

  private url: string = "http://localhost:8080/api/movie";
  private urlMovieUsers: string = "http://localhost:8080/api/usersmovie" // new url new endpoint for usersmovie table

  constructor(private http: HttpClient) { }

  getAllMovies(token: any) {
    // console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);

    return this.http.get<Movielist[]>(this.url, { headers });
  }

  getMoviesByUser(token: any){
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get<UsersMovie[]>(this.urlMovieUsers);
  }

  getMovieById(id: number) {
    return this.http.get<Movielist>(this.url + "/" + id);
  }

  addMovie(newMovie: Movielist) {
    return this.http.post(this.url, newMovie);
  }

  updateMovie(updatedMovie: Movielist) {
    return this.http.put(this.url, updatedMovie);
  }

  deleteMovieById(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}
