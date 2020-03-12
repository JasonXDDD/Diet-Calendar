import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
    // this.initCalendar();
  }

  initCalendar() {
  const data = [
    { count: 2, date: '2019-09-23' },
    { count: 1, date: '2019-10-23' },
    { count: 4, date: '2019-11-11' },
    { count: 5, date: '2019-11-13' },
    { count: 3, date: '2019-11-21' }
  ];

  $('#heatmap-demo').CalendarHeatmap(data, {
      // title of the calendar heatmap
      title: null,

      // the number of months to display
      months: 12,


      // color gradients
      coloring: null,

      // custom labels
      labels: {
        days: true,
        months: true,
        custom: {
          weekDayLabels: null,
          monthLabels: 'YYYY/MM'
        }
      },

      // custom legend
      legend: {
        show: true,
        align: 'right',
        minLabel: 'Less',
        maxLabel: 'More'
      },

      // custom tooltips
      // requires <a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a>
      tooltips: {
        show: true,
        options: {
          title: 'XD'
        }
      }
     });
  }
}
