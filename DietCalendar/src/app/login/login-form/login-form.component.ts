import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  @Output() slideNext = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  doNextPage() {
    this.slideNext.emit();
  }
}
