import { Component, OnInit } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.sass']
})
export class DietComponent implements OnInit {

  constructor(private afs: AfsService) { }

  dietList: Observable<any[]>;
  ngOnInit(): void {
    this.dietList = this.afs.doGet('diet');
  }


}
