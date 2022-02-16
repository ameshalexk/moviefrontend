import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movielist } from '../app/movielist';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  private url: string = "http://localhost:8080/api/movie";


  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get<movielist[]>(this.url)
  }

  getMovieById(id: number) {
    return this.http.get<movielist>(this.url + "/" + id);
  }

  addMovie(newMovie: movielist) {
    return this.http.post(this.url, newMovie);
  }

  updateMovie(updatedMovie: movielist) {
    return this.http.put(this.url, updatedMovie);
  }

  deleteMovieById(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}
