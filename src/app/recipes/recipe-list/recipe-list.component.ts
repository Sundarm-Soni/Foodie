import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('North Indian', 'Good Maincourse', '../../assets/merlin_146234352_d7bc8486-b067-4cff-a4c0-7741f166fb60-articleLarge.jpg'),
    new Recipe('Burger', 'This is simply a test', '../../assets/junk-food-turns-kid-blind.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);


  }
}
