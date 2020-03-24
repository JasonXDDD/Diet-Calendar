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
  constructor() {}

  ngOnInit(): void {}

  toggleList(value) {
    this.contentEvent.emit(value);
  }
}
