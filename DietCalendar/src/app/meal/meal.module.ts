import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal.component';
import { MealItemComponent } from './meal-item/meal-item.component';
import { MealNewComponent } from './meal-new/meal-new.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [MealComponent, MealItemComponent, MealNewComponent],
  imports: [
    CommonModule,
    MealRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [MealComponent]
})
export class MealModule {
  static EntryComponent = MealComponent;
}
