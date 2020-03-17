import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginScheduleComponent } from './login-schedule/login-schedule.component';
import { EventItemComponent } from './login-schedule/event-item/event-item.component';


@NgModule({
  declarations: [LoginComponent, LoginFormComponent, LoginScheduleComponent, EventItemComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
