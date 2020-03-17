import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietComponent } from './diet.component';
import { DietNewComponent } from './diet-new/diet-new.component';


const routes: Routes = [
  { path: '', component: DietComponent },
  { path: 'new', component: DietNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
