import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './services/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './AuthGuard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent,canActivate:[AuthGuard], children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent, resolve: {RecipesResolverService} },
    { path: ':id/edit', component: RecipeEditComponent, resolve: {RecipesResolverService} }

  ] },
  { path: 'shoppinglist', component: ShoppingListComponent, canActivate:[AuthGuard] },
  { path:'auth', component: AuthComponent },
  { path: '**', component: AuthComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
