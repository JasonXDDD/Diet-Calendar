import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-item',
  templateUrl: './daily-item.component.html',
  styleUrls: ['./daily-item.component.sass']
})
export class DailyItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() time: any;
  @Input() image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
