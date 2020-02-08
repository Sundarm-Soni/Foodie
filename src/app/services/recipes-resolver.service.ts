import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from '../model/recipe.model';
import { DataStorageService } from './data-storage.service';

@Injectable({providedIn:'root'})
export class RecipesResolverService implements Resolve<Recipe[]>{
constructor(private datastorage: DataStorageService){}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.datastorage.FetchRecipes();
}
}