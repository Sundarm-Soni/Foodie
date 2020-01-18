import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private slSservice: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('North Indian', 'Good Maincourse', '../../assets/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg',[
      new Ingredient('Meat',1),
      new Ingredient('FrenchFries',2)
    ]),
    new Recipe('Burger', 'This is simply a test', '../../assets/junk-food-turns-kid-blind.jpg',[
      new Ingredient('Buns',1),
      new Ingredient('Cheese',2)
    ])

  ];

  getRecipes() {

    return this.recipes.slice();

  }

  getRecipe(index: number){
    return this.recipes[index];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]){

    this.slSservice.addIngredients(ingredients);

  }

}
