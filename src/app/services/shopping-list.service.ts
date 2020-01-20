import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../model/ingredient.model';

@Injectable({ 
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  ingredients: Ingredient[] = [

    new Ingredient('Apples',5),
    new Ingredient('Tomatoes', 10)
];

 getIngredients(){
   return this.ingredients.slice();
 }

addShoppingItem(list :Ingredient){
  this.ingredients.push(list);
  this.ingredientsChanged.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){

  // for(let ingredient of ingredients ){
  //   this.addShoppingItem(ingredient);

  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}
}
