import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './diet.component';
import { DietItemComponent } from './diet-item/diet-item.component';


@NgModule({
  declarations: [DietComponent, DietItemComponent],
  imports: [
    CommonModule,
    DietRoutingModule
  ]
})
export class DietModule { }
