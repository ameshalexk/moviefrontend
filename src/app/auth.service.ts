import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn: boolean = false;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  private _isAdmin$ = new BehaviorSubject<boolean>(false);
  isAdmin$ = this._isAdmin$.asObservable();

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('profanis_auth');
    this._isLoggedIn$.next(!!token);
    this._isAdmin$.next(!!token);
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        const tokenName = JSON.parse(atob(response.jwt.split('.')[1]));
        this._isLoggedIn$.next(true);
        this.loggedIn = true;
        localStorage.setItem('profanis_auth', response.jwt);
        if (tokenName.sub === 'adminj3') {
          this._isAdmin$.next(true);
          localStorage.setItem('admin', tokenName.sub);
        } else {
          localStorage.setItem('username', tokenName.sub);

        }
      })
    );
  }

  logout() {
    this.loggedIn = false;
    this._isLoggedIn$.next(false);
    this._isAdmin$.next(false);
    localStorage.removeItem('profanis_auth');
    localStorage.removeItem('admin');
  }
}