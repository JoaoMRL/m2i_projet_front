import { Injectable } from '@angular/core';
import { User } from '../../entities';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  logged:User|null = localStorage.getItem('logged')?JSON.parse(localStorage.getItem('logged')!):null;

  constructor(private http:HttpClient, private router:Router) { }

  addUser(user:User) {
    return this.http.post<User>(environment.serverUrl+'/api/user', user);
  }

  login(user:User) {
    return this.http.post<{token:string}>(environment.serverUrl+'/api/login', user).pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
      }),
      switchMap(() => this.getUser()),
      tap(data => {
        this.logged = data;
        localStorage.setItem('logged', JSON.stringify(data));
      })
    );
  }

  getUser() {
    return this.http.get<User>(environment.serverUrl + '/api/protected');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    this.logged =null;
    this.router.navigate(['/register'])
  }
}
