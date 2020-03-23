import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { MealNewComponent } from './meal-new/meal-new.component';


@NgModule({
  declarations: [MealComponent, MealItemComponent, MealNewComponent],
  imports: [
    CommonModule,
    MealRoutingModule
  ]
})
export class MealModule { }
