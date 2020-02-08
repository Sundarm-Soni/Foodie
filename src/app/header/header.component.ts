import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
 @Output() featureSelected = new EventEmitter<string>();
  constructor(private savedata: DataStorageService) { }

  ngOnInit() {
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

}
