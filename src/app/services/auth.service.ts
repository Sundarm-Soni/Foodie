import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresin: string,
  localid: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Signup(email: string, password: string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyPSs0NjhVieKiNtf7PPisF4X1nEXSvbw',
    {
      email: email,
      password: password,
      returnSecureToken: true
    });

  }
}
