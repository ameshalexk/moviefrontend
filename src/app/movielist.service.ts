import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movielist } from '../app/movielist';


@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  private url: string = "http://localhost:8080/api/movie";


  constructor(private http: HttpClient) { }

  getAllMovies(token: any) {
    // console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);

    return this.http.get<Movielist[]>(this.url, { headers });
  }

  getMovieById(id: number, token: any) {
    // console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.get<Movielist>(this.url + "/" + id, { headers });
  }

  addMovie(newMovie: Movielist, token: any) {

    console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.post(this.url, newMovie, { headers });
  }

  updateMovie(updatedMovie: Movielist) {
    return this.http.put(this.url, updatedMovie);
  }

  deleteMovieById(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}
