import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }

  iniciarSesion(user: string, pass: string) {
    return this.http.post('http://localhost:3000/api/login', { email: user, password: pass}, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    });
  }

  public get logIn(): boolean {
    return (localStorage.getItem('isLoggedin') !== null);
  }
}
