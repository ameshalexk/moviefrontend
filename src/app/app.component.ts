import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { MaterialModule } from './material/material.module';
import { MovielistService } from './movielist.service';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedIn = false;

  constructor(public authService: AuthService){}
  
}
