import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { AfsService } from '@app/core/services/afs.service';
import { ServerService } from '@app/core/services/server.service';
import { ServerUrl } from '@app/core/data/server_url';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { environment } from '@env/environment';

@Component({
  selector: 'app-meal-new',
  templateUrl: './meal-new.component.html',
  styleUrls: ['./meal-new.component.sass']
})
export class MealNewComponent implements OnInit {
  @ViewChild('cameraImage') cameraImage: ElementRef;

  user = '';
  cover = '';
  tilte = '';
  slogan = '';
  content = '';
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

  editorHandler(event) {
    this.content = event;
  }

  async doSubmit() {
    this.loading = true;

    const data = {
      user: this.user,
      title: this.tilte,
      content: this.content,
      cover: this.cover,
      slogan: this.slogan,
      createAt: new Date()
    };

    await this.afs.doAddMeal(data);
    this.loading = false;
    this.router.navigate(['/meal']);
  }

  // Deprecated: turn into imgur upload api
  uploadFile(event) {
    this.loading = true;
    const self = this;
    const file = event.target.files[0];
    const filePath = `${moment().format('YYYYMMDD-HHmm')}-${this.user}-${
      file.name
    }`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(ele => {
            self.cover = ele;
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
    formData.append(
      'title',
      `${moment().format('YYYYMMDD-HHmm')}-${this.user}-${file.name}`
    );

    const ans = await this.server.doPostNoHeaderRequest(
      this.api.imgurAPI,
      formData,
      {},
      {
        Authorization: 'Client-ID ' + environment.imgur.clientId
      }
    );

    // save data to image
    if (ans.status === 200) {
      this.cover = ans.data.data.link;
    }
    this.loading = false;
  }
}
