import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeservice: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeservice.getRecipe(this.id);

  });
  }

  onAddToShoppingList(){
  this.recipeservice.addIngredientsToShoppingList(this.recipe.ingredients);
   }

   onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});

   }

   onDeleteRecipe(){
     this.recipeservice.deleteRecipe(this.id);
     this.router.navigate(['../'],{relativeTo: this.route});
   }
}
