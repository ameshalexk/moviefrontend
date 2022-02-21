import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (form.valid) {
      // console.log(form.value);
      // console.log("username = " + this.username);
      // console.log("password = " + this.password);

      this.authService
        .login(this.username, this.password)
        .subscribe((res) => {
          // console.log("*** AFTER CLICKING LOGIN BUTTON ***" + res)
          this.router.navigate(['/home']);
        })


    }
    else {
      console.log("Form not valid")
    }
  }
}