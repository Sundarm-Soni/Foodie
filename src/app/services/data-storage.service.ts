import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../model/recipe.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://course-recipe-book-b4a9f.firebaseio.com/recipes.json',recipes).subscribe(response=>{
      console.log(response);
    });

  }

  FetchRecipes(){
    this.http.get<Recipe[]>('https://course-recipe-book-b4a9f.firebaseio.com/recipes.json').pipe(map(recipes=>{
      return recipes.map(recipe=>{
        return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    })).subscribe(recipes=>{
    this.recipeService.setRecipes(recipes);

    });

  }


}
