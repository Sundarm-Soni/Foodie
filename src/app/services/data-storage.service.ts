import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from '../model/recipe.model';
import { map,tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put<Recipe[]>('https://course-recipe-book-b4a9f.firebaseio.com/recipes.json',recipes).subscribe(response=>{
      console.log(response);
    });

  }

  FetchRecipes(){
        return this.http.get<Recipe[]>('https://course-recipe-book-b4a9f.firebaseio.com/recipes.json').pipe(map(recipes=>{
        return recipes.map(recipe=>{
        return {...recipe,ingredients: recipe.ingredients ? recipe.ingredients : []};
      });
    }),
    tap(recipes=>{
      this.recipeService.setRecipes(recipes);
  }));
    
  }
}
