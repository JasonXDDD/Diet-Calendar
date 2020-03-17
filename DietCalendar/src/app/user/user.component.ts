import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    if (!this.user) {
      this.router.navigate(['/login']);
    }
    this.initCalendar();
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
      coloring: 'standard',

      // custom labels
      labels: {
        days: false,
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
