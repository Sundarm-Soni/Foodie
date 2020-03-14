import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component'; 
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
   islogin = true;
   isLoadingSpinner = false;
   error: string = null;
  @ViewChild(PlaceholderDirective,{static: false}) alertHost: PlaceholderDirective;
  private closeSub: Subscription;
  constructor(private authservice: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
    
  }


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
     this.authservice.autologin();
    }
    authObs.subscribe(response => {
      console.log(response);
      this.isLoadingSpinner = false;
      },
      errorMessage=>{
        this.error = errorMessage;
        console.log(this.error);
        this.showErrorAlert(errorMessage);
        this.isLoadingSpinner = false;
      }
      );
    authform.reset();
  }
  onHandleError(){
    this.error = null;
  }
  ngOnDestroy(){
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }

  }  
  

  private showErrorAlert(message: string){
    //const alertCmp = new AlertComponent();
   const alertCmpFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
