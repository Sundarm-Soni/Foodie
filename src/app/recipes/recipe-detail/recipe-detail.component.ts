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
  constructor(private addIng: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.recipe = this.addIng.getRecipe(this.id);

  });
  }

  onAddToShoppingList(){
  this.addIng.addIngredientsToShoppingList(this.recipe.ingredients);
   }

   onEditRecipe(){
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});

   }
}
