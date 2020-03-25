import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.sass']
})
export class MealItemComponent implements OnInit {
  @Input() title: string;
  @Input() slogan: string;
  @Input() time: any;
  @Input() user: string;
  @Input() cover: string;
  @Output() contentEvent = new EventEmitter<boolean>();

  isOpen = false;
  top;

  constructor() {}

  ngOnInit(): void {}

  toggleList(value) {

    if (value) {
      this.top = window.pageYOffset;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: this.top,
        left: 0,
        behavior: 'smooth'
      });
    }
    this.contentEvent.emit(value);
  }
}
