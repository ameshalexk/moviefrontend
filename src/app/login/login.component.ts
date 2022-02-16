import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string = '';
  public password: string = '';



  constructor() { }

  ngOnInit(): void {
  }

  if(form.valid) {
    console.log( form.value);
    console.log( "username=" + this.username);
    console.log( "password=" + this.password);
    }
    else {
      console.log("Form not valid")
    }
}


