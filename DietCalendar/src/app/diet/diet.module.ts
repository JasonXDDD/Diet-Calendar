import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DietRoutingModule } from './diet-routing.module';
import { DietComponent } from './diet.component';
import { DietItemComponent } from './diet-item/diet-item.component';
import { DietNewComponent } from './diet-new/diet-new.component';


@NgModule({
  declarations: [DietComponent, DietItemComponent, DietNewComponent],
  imports: [
    CommonModule,
    DietRoutingModule,
    FormsModule
  ]
})
export class DietModule { }
