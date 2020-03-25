import { Component, OnInit, Compiler } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.sass']
})
export class PcComponent implements OnInit {
  calendarComponent;
  dietComponent;
  mealComponent;

  constructor(private compiler: Compiler) { }

  ngOnInit(): void {
    import('@app/calendar/calendar.module').then(m => {
      const module = m.CalendarModule;
      this.compiler.compileModuleAsync(module).then(moduleFactory => {
        this.calendarComponent = module.EntryComponent;
      });
    });

    import('@app/diet/diet.module').then(m => {
      const module = m.DietModule;
      this.compiler.compileModuleAsync(module).then(moduleFactory => {
        this.dietComponent = module.EntryComponent;
      });
    });

    import('@app/meal/meal.module').then(m => {
      const module = m.MealModule;
      this.compiler.compileModuleAsync(module).then(moduleFactory => {
        this.mealComponent = module.EntryComponent;
      });
    });
  }


}
