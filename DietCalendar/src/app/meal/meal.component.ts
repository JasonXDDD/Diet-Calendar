import { Component, OnInit } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.sass']
})
export class MealComponent implements OnInit {
  isOpen = false;
  mealList: Observable<any>;

  constructor(private afs: AfsService) {}

  async ngOnInit() {
    this.mealList = await this.afs.doGet('meal');
  }

  setContent(value) {
    this.isOpen = value;
  }
}
