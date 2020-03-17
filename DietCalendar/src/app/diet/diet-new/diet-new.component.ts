import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ServerUrl } from '@app/core/data/server_url';
import { ServerService } from '@app/core/services/server.service';
import { Router } from '@angular/router';
import { AfsService } from '@app/core/services/afs.service';


@Component({
  selector: 'app-diet-new',
  templateUrl: './diet-new.component.html',
  styleUrls: ['./diet-new.component.sass']
})
export class DietNewComponent implements OnInit, AfterViewInit {

  @ViewChild('cameraImage') cameraImage: ElementRef;

  image: any = '';
  tilte = '';
  description = '';

  constructor(private afs: AfsService, private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cameraImage.nativeElement.click();
  }

  addImage(event) {
    const self = this;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = async () => {
        self.image = reader.result;
      };
    }
  }

  async doSubmit() {
    const data = {
      user: 'XD',
      title: this.tilte,
      description: this.description,
      image: this.image,
      time: new Date(),
    };

    await this.afs.doAddItem(data);
    this.router.navigate(['/diet']);
  }


}
