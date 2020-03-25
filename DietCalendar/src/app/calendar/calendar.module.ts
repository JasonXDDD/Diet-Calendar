import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { DailyItemComponent } from './daily-item/daily-item.component';


@NgModule({
  declarations: [CalendarComponent, DailyItemComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ],
  entryComponents: [CalendarComponent]
})
export class CalendarModule {
  static EntryComponent = CalendarComponent;
}
