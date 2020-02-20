import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){

  }
// onNavigate(feature: string){
//   this.loadedFeature = feature;
// }

ngOnInit() {
  this.authService.autologin();
}
}

