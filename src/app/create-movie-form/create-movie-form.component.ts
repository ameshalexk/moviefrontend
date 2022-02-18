import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movielist } from '../movielist';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-create-movie-form',
  templateUrl: './create-movie-form.component.html',
  styleUrls: ['./create-movie-form.component.css']
})
export class CreateMovieFormComponent implements OnInit {
  public value: any = null;

  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private movieService: MovielistService, private router: Router) { }

  ngOnInit(): void {
    this.value = localStorage.getItem('profanis_auth');
    this.myForm = this.fb.group({
      description: ['', [Validators.required]],
      genre: ['', Validators.required],
      name: ['', [Validators.required]],
      publishedYear: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.movieService.addMovie(new Movielist(0, form.value.description, form.value.genre, form.value.name, form.value.publishedYear), this.value)
        .subscribe({
          next: (response) => {
            console.log(response)
            form.reset();
            this.router.navigate(['/movies']);

          },
          error: (error) => { console.log(error) }
        })

    } else {
      console.log('Form not valid');
    }
  }
  validField(f: string) {
    const field = this.myForm.get(f);
    return (field?.invalid && field.errors && (field.dirty || field.touched));

  }
  hasMinLength(f: string) {
    const field = this.myForm.get(f);
    return !field?.hasError('minLength');

  }
}