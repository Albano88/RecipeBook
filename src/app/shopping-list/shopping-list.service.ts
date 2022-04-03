import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppoingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

     private Aingredients: Ingredient[]  = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    
      ];

      getIngredients (){
          //otteniamo una copia dell array
          return this.Aingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
          this.Aingredients.push(ingredient);
          this.ingredientChanged.emit(this.Aingredients.slice());

      }

      addIngredients(ingredients: Ingredient[]){
         // for( let ingredient of ingredients){
         //    this.addIngredient(ingredient);
         // }
         this.Aingredients.push(...ingredients);
          this.ingredientChanged.emit(this.Aingredients.slice());

      }




    


      
    
}