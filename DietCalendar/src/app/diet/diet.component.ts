import { Component, OnInit } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.sass']
})
export class DietComponent implements OnInit {

  user = '';
  constructor(private afs: AfsService) { }

  dietList: Observable<any>;

  async ngOnInit() {
    this.user = localStorage.getItem('user');
    this.dietList = await this.afs.doGet('diet', { user: this.user });
  }

}
