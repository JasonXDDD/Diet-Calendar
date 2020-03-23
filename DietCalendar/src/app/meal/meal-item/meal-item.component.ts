import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
