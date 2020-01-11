import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [

    new Ingredient('Apples',5),
    new Ingredient('Tomatoes', 10)
];

 getIngredients(){
   return this.ingredients.slice();
 }

addShoppingItem(list :Ingredient){
  this.ingredients.push(list);
  this.ingredientsChanged.emit(this.ingredients.slice());
}
}
