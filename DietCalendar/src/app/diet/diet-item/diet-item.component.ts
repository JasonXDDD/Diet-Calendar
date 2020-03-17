import { Component, OnInit, Input } from '@angular/core';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-diet-item',
  templateUrl: './diet-item.component.html',
  styleUrls: ['./diet-item.component.sass']
})
export class DietItemComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() time: any;
  @Input() user: string;
  @Input() image: string;
  constructor() { }

  ngOnInit(): void {
  }

}
