import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
   islogin = true;
  constructor() { }

  ngOnInit() {
  }

  SwitchLogin(){
    this.islogin = !this.islogin;
  }

  Submit(authform: NgForm){
    console.log(authform.value);
   // authform.reset();

  }
}
