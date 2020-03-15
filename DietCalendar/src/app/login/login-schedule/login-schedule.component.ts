import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-schedule',
  templateUrl: './login-schedule.component.html',
  styleUrls: ['./login-schedule.component.sass']
})
export class LoginScheduleComponent implements OnInit {

  @Output() slideNext = new EventEmitter<any>();
  schedule = [
    { title: '起床', time: '00:00', fromStatus: '睡眠'},
    { title: '可吃食物', time: '00:00', fromStatus: '禁食'},
    { title: '限制進食', time: '00:00', fromStatus: '吃'},
    { title: '睡覺', time: '00:00', fromStatus: '禁食'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeTime(id, time) {
    this.schedule[id].time = time;
  }

  // progress bar

  genProgressBar(list) {
    const tmp = [];
    list.forEach(ele => {
      tmp.push({
        time: moment.utc(ele.time, 'HH:mm').valueOf(),
        status: ele.fromStatus,
        title: ele.title,
        duration: 0
      });
    });

    tmp.sort((a, b) => a.time - b.time)
    .map((ele, id) => {
      if (id === 0) {
        ele.duration = moment.utc(ele.time).diff(moment.utc('00:00', 'HH:mm'), 'hours', true);
      } else {
        ele.duration = moment.utc(ele.time).diff(moment.utc(tmp[id - 1].time), 'hours', true);
      }
    });

    tmp.push({
      time: 0,
      status: tmp[0].status,
      title: tmp[0].title,
      duration: moment.utc('24:00', 'HH:mm').diff(moment.utc(tmp[tmp.length - 1].time), 'hours', true)
    });

    return tmp;
  }

  calcType(list, type) {
    return list.filter(ele => ele.status === type)
    .map(ele => ele.duration)
    .reduce((a, b) => a + b);
  }

  doNextPage() {
    this.slideNext.emit();
  }
}
