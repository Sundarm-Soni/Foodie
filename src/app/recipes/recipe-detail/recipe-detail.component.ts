import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private addIng: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
  this.addIng.addIngredientsToShoppingList(this.recipe.ingredients);
   }

}
