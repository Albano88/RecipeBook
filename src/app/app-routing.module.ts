import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRouters: Routes = [
  //{path: 'recipe', canActivate:[AuthGuard], component: RecipesComponent },
  //reindirizza se il percorso è vuoto
  {path: '',redirectTo:'/recipe',pathMatch:'full' },
  {path: 'recipe', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent}
  ] },
  {path: 'shoppinglist', component: ShoppingListComponent },
  {path: 'not-found', component: PageNotFoundComponent },
  {path: '**', redirectTo:'/not-found' }

];

@NgModule({
  // utilizato per adattare browser vecchi[RouterModule.forRoot(appRouters), {useHash: true}],
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
