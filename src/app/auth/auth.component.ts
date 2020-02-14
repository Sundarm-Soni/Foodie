import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  {
   islogin = true;
   isLoadingSpinner = false;
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
    this.isLoadingSpinner = true;
    if(this.islogin){
      //
    }
    else{
      this.authservice.Signup(email, password).subscribe(response => {console.log(response)
      this.isLoadingSpinner = false;
      },
      error=>{
        console.log(error);
        this.isLoadingSpinner = false;
      }
      );
    }
    
    authform.reset();
  }
}
