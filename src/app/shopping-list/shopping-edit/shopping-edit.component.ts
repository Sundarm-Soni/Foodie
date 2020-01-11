import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;
  @Output() ingredientadded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
onAddItem(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient(ingName,ingAmount);
  this.ingredientadded.emit(newIngredient);

}


}
