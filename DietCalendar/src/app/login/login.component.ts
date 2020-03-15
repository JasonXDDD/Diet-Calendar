import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  mySwiper: any;
  constructor() { }

  ngOnInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    this.mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  slideNext() {
    this.mySwiper.slideNext();
  }

}
