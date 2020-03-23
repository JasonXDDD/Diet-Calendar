import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealComponent } from './meal.component';
import { MealNewComponent } from './meal-new/meal-new.component';


const routes: Routes = [
  { path: '', component: MealComponent },
  { path: 'new', component: MealNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
