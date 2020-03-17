import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.sass']
})
export class TabbarComponent implements OnInit {

  url;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const self = this;
    this.router.events.subscribe(async evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      } else {
        self.url = evt.url;
      }
    });
  }

}
