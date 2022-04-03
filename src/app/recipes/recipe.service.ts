import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


     private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    
          new Recipe('Another Test Recipe', 'This is simply test',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
    
      ];

      
      public getRecipe() {
          return this.recipes.slice();
      }
      
}