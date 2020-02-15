import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = true;
  userSub: Subscription;
  isAuthenticated = false;
 @Output() featureSelected = new EventEmitter<string>();
  constructor(private savedata: DataStorageService, private authservice: AuthService) { }

  ngOnInit() {
    this.userSub = this.authservice.user.subscribe(user=>{
      this.isAuthenticated = !!user; //!user ? false: true
      console.log(!user);
      console.log(!!user);
    });

  }


  onSelect(feature: string){
      this.featureSelected.emit(feature);

  }

  saveData(){
    this.savedata.storeRecipes();

  }

  fetchRecipes(){
    this.savedata.FetchRecipes().subscribe();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
