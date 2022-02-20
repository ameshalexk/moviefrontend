import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private url: string = "http://localhost:8080/api/user";


  constructor(private http: HttpClient) { }


  getUserById(id: number, token: any) {
    console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.get(this.url + "/" + id, { headers });
  }
  getUserByName(name: string, token: any) {
    console.log("***TOKEN*** " + token)
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);


    return this.http.get(this.url + "/" + name, { headers });
  }

}
