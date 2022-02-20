import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsermoviesService {
  private url: string = "http://localhost:8080/api/usersmovie";

  constructor(private http: HttpClient) { }


  getUserMovies(token: any) {
    console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.get(this.url, { headers });
  }
  custom(id: number, token: any) {
    console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.get(this.url, { headers });
  }


  addUserMovie(newUserMovie: Object, token: any) {

    console.log("***TOKEN*** " + token, newUserMovie)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.post(this.url, newUserMovie, { headers });
  }


  deleteUserMovieById(id: any, token: any) {

    console.log("***TOKEN DELETEDDDDD*** " + token, id)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.delete(this.url + "/" + id, { headers });
  }


}
