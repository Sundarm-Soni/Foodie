import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
constructor(private datastorage: DataStorageService, private recipeservice: RecipeService){}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let recipes = this.recipeservice.getRecipes();
        if(recipes.length === 0){
        return this.datastorage.FetchRecipes();
        }
        else{
            return recipes;
        }
}       
}