import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[])=>{
        this.ingredients = ingredients;

      });
  }

  

}
