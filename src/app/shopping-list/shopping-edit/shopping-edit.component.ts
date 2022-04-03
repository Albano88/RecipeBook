import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient} from 'src/app/shared/ingredient.model';
import { ShoppoingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
 @ViewChild('amountInput') amountInputRef: ElementRef | undefined;

  constructor(private slService: ShoppoingListService) { }

  ngOnInit(): void { }

  onAddItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }

  onDeleteItem(){
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;
  }


}
