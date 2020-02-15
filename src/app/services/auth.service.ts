import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData{
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresin: string,
  localid: string,
  registered?: boolean
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
    }).pipe(
      catchError(errorRes =>{
        let errorMessage = "Unknown Error Occured";
        if(!errorRes.error && !errorRes.error.error){
          return throwError(errorMessage);
        }
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS':
            errorMessage = "This Email Already Exists!!!";
        }
        return throwError(errorMessage);
      })
    );
}

Login(email: string, password: string){
  return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyPSs0NjhVieKiNtf7PPisF4X1nEXSvbw',{
    email: email,
    password: password,
    returnSecureToken: true
  }).pipe(
    catchError(errorRes =>{
      let errorMessage = "Unknown Error Occured";
      if(!errorRes.error && !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = "This Email Already Exists!!!";
      }
      return throwError(errorMessage);
    })
  );

}

}
