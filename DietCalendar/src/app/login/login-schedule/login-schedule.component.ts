import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-schedule',
  templateUrl: './login-schedule.component.html',
  styleUrls: ['./login-schedule.component.sass']
})
export class LoginScheduleComponent implements OnInit {

  schedule = [
    { title: '起床', time: '00:00'},
    { title: '可吃食物', time: '00:00'},
    { title: '限制進食', time: '00:00'},
    { title: '睡覺', time: '00:00'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  changeTime(id, time) {
    this.schedule[id].time = time;
  }

  // progress bar

  // TODO: change it to moment for time duration
  calcTimeToLength(from, to) {
    function formatNumber(time) {
      const tmp = time.split(':');
      let ans = 0;
      ans += Number(tmp[0]);
      if (tmp[1] === '30') { ans += 0.5; }
      return ans;
    }
    const fromNumber = formatNumber(from);
    const toNumber = formatNumber(to);

    return ((toNumber - fromNumber) * 100 / 24) + '%';
  }
}
