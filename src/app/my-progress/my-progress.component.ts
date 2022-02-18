import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-my-progress',
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.css']
})
export class MyProgressComponent implements OnInit {
  myProgressTitle = 'My Progress'
  movieDuration = 2.5 // placeholder value

  displayVal:number = 0
  displayVal2:number = 0

  getValue(num:number){
    this.displayVal = num;
  }

  getValue2(num:number){
    this.displayVal2 = num
  }

  calculateSpinnerPercentage(displayVal:number, movieDuration:number){
    this.displayVal/movieDuration * 100;
  }

  displayCalculatedVal = this.calculateSpinnerPercentage;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}

