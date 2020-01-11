import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('North Indian', 'Good Maincourse', '../../assets/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg'),
    new Recipe('Burger', 'This is simply a test', '../../assets/junk-food-turns-kid-blind.jpg')

  ];

  getRecipes() {

    return this.recipes.slice();

  }

}
