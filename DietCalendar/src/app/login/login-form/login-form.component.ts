import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AfsService } from '@app/core/services/afs.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  user = '';
  weight = 0;
  target = 0;

  @Output() slideNext = new EventEmitter<any>();

  constructor(private afs: AfsService) { }

  ngOnInit(): void {
  }

  doNextPage() {
    this.slideNext.emit();
  }

  async doSubmit() {
    const data = {
      user: this.user,
      weight: this.weight,
      target: this.target,
      time: new Date()
    };
    await this.afs.doAddUser(data);

    localStorage.setItem('user', this.user);
    localStorage.setItem('weight', String(this.weight));
    localStorage.setItem('target', String(this.target));

    this.doNextPage();
  }
}
