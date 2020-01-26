import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;
  @ViewChild('f',{static: true})  slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
     this.subscription =  this.shoppingList.startedEditing.subscribe((index: number)=>{
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingList.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
     });

  }
onAddItem(form: NgForm){
  const value = form.value;
  const newIngredient = new Ingredient(value.name, value.amount);
  if(this.editMode){
    this.shoppingList.updateIngredient(this.editedItemIndex,newIngredient);
}else{
  this.shoppingList.addShoppingItem(newIngredient);
}
this.editMode = false;
form.reset();
}

onClear(){
  this.slForm.reset();
  this.editMode = false;
}
onDelete(){
this.shoppingList.clearIngredient(this.editedItemIndex);
this.onClear();
}

ngOnDestroy(){
  this.subscription.unsubscribe();

}

}
