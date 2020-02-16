import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  {
   islogin = true;
   isLoadingSpinner = false;
   error: string = null;
  constructor(private authservice: AuthService) { }


  SwitchLogin(){
    this.islogin = !this.islogin;
  }

  Submit(authform: NgForm){
    if(!authform.valid){
      return;
    }
    const email = authform.value.email;
    const password = authform.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoadingSpinner = true;
    if(this.islogin){
      authObs = this.authservice.Login(email, password);
    }
    else{
     authObs =  this.authservice.Signup(email, password);
    }
    authObs.subscribe(response => {
      console.log(response);
      this.isLoadingSpinner = false;
      },
      errorMessage=>{
        this.error = errorMessage;
        console.log(this.error);
        this.isLoadingSpinner = false;
      }
      );
    authform.reset();
  }
}
