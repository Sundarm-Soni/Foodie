import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }
onAddItem(form: NgForm){
  const value = form.value;
  const newIngredient = new Ingredient(value.name, value.amount);
  this.shoppingList.addShoppingItem(newIngredient);

}


}
