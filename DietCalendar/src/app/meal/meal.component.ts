import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.sass']
})
export class MealComponent implements OnInit {
  isOpen = false;
  mealList = [
    {
      title: '嫩煎雞排嫩煎雞排',
      slogan: '學會嫩煎雞排',
      cover: 'https://i.imgur.com/aoR9siY.jpg',
      createAt: new Date(),
      user: '罐罐 XD'
    },
    {
      title: '嫩煎雞排',
      slogan: '學會嫩煎雞排',
      cover: 'https://i.imgur.com/aoR9siY.jpg',
      createAt: new Date(),
      user: '罐罐 XD'
    },
    {
      title: '嫩煎雞排',
      slogan: '學會嫩煎雞排',
      cover: 'https://i.imgur.com/aoR9siY.jpg',
      createAt: new Date(),
      user: '罐罐 XD'
    },
    {
      title: '嫩煎雞排',
      slogan: '學會嫩煎雞排',
      cover: 'https://i.imgur.com/aoR9siY.jpg',
      createAt: new Date(),
      user: '罐罐 XD'
    },
    {
      title: '嫩煎雞排',
      slogan: '學會嫩煎雞排',
      cover: 'https://i.imgur.com/aoR9siY.jpg',
      createAt: new Date(),
      user: '罐罐 XD'
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  setContent(value) {
    this.isOpen = value;
  }
}
