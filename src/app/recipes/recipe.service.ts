import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppoingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();


     private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat',1),
            new Ingredient('French fries',20),

        ]),
    
          new Recipe('Another Test Recipe', 'This is simply test',
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
          [
            new Ingredient('Meat',1),
            new Ingredient('Buns',2),

          ])
    
      ];

      constructor(private slService: ShoppoingListService){
          
      }

      
      public getRecipe() {
          return this.recipes.slice();
      }

      addIngredientsToSL(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

      }
      
}