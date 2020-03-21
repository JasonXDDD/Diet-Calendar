import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { ServerUrl } from '@app/core/data/server_url';
import { ServerService } from '@app/core/services/server.service';
import { Router } from '@angular/router';
import { AfsService } from '@app/core/services/afs.service';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Component({
  selector: 'app-diet-new',
  templateUrl: './diet-new.component.html',
  styleUrls: ['./diet-new.component.sass']
})
export class DietNewComponent implements OnInit, AfterViewInit {
  @ViewChild('cameraImage') cameraImage: ElementRef;

  user = '';
  image = '';
  tilte = '';
  description = '';
  downloadURL: Observable<string>;
  loading = false;

  constructor(
    private afs: AfsService,
    private server: ServerService,
    private api: ServerUrl,
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  ngAfterViewInit(): void {
    this.cameraImage.nativeElement.click();
  }

  async doSubmit() {
    this.loading = true;

    const data = {
      user: this.user,
      title: this.tilte,
      description: this.description,
      image: this.image,
      time: new Date()
    };

    await this.afs.doAddItem(data);
    this.loading = false;
    this.router.navigate(['/diet']);
  }


  // Deprecated: turn into imgur upload api
  uploadFile(event) {
    this.loading = true;
    const self = this;
    const file = event.target.files[0];
    const filePath = `${moment().format('YYYYMMDD-HHmm')}-${this.user}-${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(ele => {
            self.image = ele;
            self.loading = false;
          });
        })
      )
      .subscribe();
  }

  addImage(event) {
    const self = this;
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = async () => {
        self.uploadImage(reader.result, file);
      };
    }
  }

  async uploadImage(data, file) {
    this.loading = true;

    const formData = new FormData();
    formData.append('image', data.split(',')[1]);
    formData.append('title', `${moment().format('YYYYMMDD-HHmm')}-${this.user}-${file.name}`);

    const ans = await this.server.doPostNoHeaderRequest( this.api.imgurAPI, formData, {}, {
      Authorization: 'Client-ID ' + environment.imgur.clientId
    });

    console.log(ans);
    if (ans.status === 200) {
      this.image = ans.data.data.link;
    }
  }
}
