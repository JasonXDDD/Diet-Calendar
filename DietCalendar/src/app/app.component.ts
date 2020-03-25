import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private deviceService: DeviceDetectorService) {}

  isMobile = false;
  ngOnInit(): void {
    // this.initCalendar();
    this.isMobile = this.deviceService.isMobile();
  }


}
