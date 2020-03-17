import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initCalendar();
  }

  initCalendar() {
    $('#inline_calendar').calendar({
      type: 'date',
      debug: true,
      initialDate: moment(new Date()).format('DD-MM-YYYY'),
      eventDates: [
        {
          date: new Date('2020-03-20'),
          message: 'Show me in light purple',
          class: 'eat'
        },
        // {
        //   date: new Date(2019, 3, 22),
        //   message: 'Show me in green',
        //   class: 'green'
        // }
      ]

    });
  }
}
