import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'diet', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule) },
  { path: 'diet', loadChildren: () => import('src/app/diet/diet.module').then(m => m.DietModule) },
  { path: 'user', loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule) },
  { path: 'calendar', loadChildren: () => import('src/app/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
