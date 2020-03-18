import { Component, OnInit } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass']
})
export class CalendarComponent implements OnInit {
  user = '';
  dataList: Observable<any>;
  targetList = [];

  constructor(private afs: AfsService) {}

  async ngOnInit() {
    this.user = localStorage.getItem('user');
    this.dataList = await this.afs.doGet('diet', { user: this.user });
    this.genEvent(this.dataList);
    this.getTargetList(new Date());
  }

  initCalendar(event) {
    const self = this;
    $('#inline_calendar').calendar({
      type: 'date',
      initialDate: moment(new Date()).format('DD-MM-YYYY'),
      eventDates: event,
      onSelect: (date, mode) => {
        self.getTargetList(date);
      }
    });
  }

  getTargetList(date) {
    this.dataList.subscribe(data => {
      this.targetList = data.filter(
        ele =>
          moment(ele.time.toDate()).format('YYYY-MM-DD') ===
          moment(date).format('YYYY-MM-DD')
      ).reverse();
    });
  }

  genEvent(list) {
    let tmp = [];
    const self = this;
    list.subscribe(data => {
      tmp = data
        .map(ele => moment(ele.time.toDate()).format('YYYY-MM-DD'))
        .filter((val, id, arr) => {
          return arr.indexOf(val) === id;
        })
        .map(ele => ({
          date: new Date(ele),
          class: 'eat'
        }));

      self.initCalendar(tmp);
    });
  }
}
