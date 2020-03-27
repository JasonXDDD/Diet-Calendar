import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { ServerUrl } from '@app/core/data/server_url';
import { ServerService } from '@app/core/services/server.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-tiny-editor',
  templateUrl: './tiny-editor.component.html',
  styleUrls: ['./tiny-editor.component.sass']
})
export class TinyEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() elementId: string;
  @Input() data: string;
  @Output() onEditorKeyup = new EventEmitter<any>();
  @Output() onEditorChange = new EventEmitter<any>();

  editor;
  img: any;
  filename: string;

  constructor(private server: ServerService, private api: ServerUrl) { }

  ngOnInit() {
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
    const formData = new FormData();
    formData.append('image', data.split(',')[1]);
    formData.append('title', `${moment().format('YYYYMMDD-HHmm')}-${file.name}`);

    const ans = await this.server.doPostNoHeaderRequest( this.api.imgurAPI, formData, {}, {
      Authorization: 'Client-ID ' + environment.imgur.clientId
    });

    // save data to image
    if (ans.status === 200) {
      this.img = ans.data.data.link;

      this.editor.insertContent(
        `<a data-fancybox="gallery" href="${this.img}" style="display: inline-block">
          <img class="content-image" src="${this.img}"/>
        </a>`
      );
    }
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table', 'lists', 'image', 'textcolor', 'colorpicker'],
      menubar: false,
      height: 500,
      // tslint:disable-next-line: max-line-length
      toolbar: 'undo redo | formatselect | bold italic strikethrough forecolor backcolor | alignleft aligncenter alignright | bullist numlist outdent indent | link mybutton',
      skin_url: '/assets/diet-tiny-editor/skins/ui/diet-tiny-editor',
      content_css: '/assets/diet-tiny-editor/skins/content/diet-tiny-editor/content.css',
      theme: 'silver',
      mobile: {
        toolbar: 'undo redo bold italic mybutton',
      },
      setup: editor => {
        this.editor = editor;

        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });

        editor.on('change', () => {
          const content = editor.getContent();
          this.onEditorChange.emit(content);
        });

        editor.on('reset', (e) => {
          editor.setContent('');
        });

        editor.ui.registry.addButton('mybutton', {
          icon: 'image',
          onAction: () => {
            const input = document.getElementById('input');
            input.click();
          }
        });
      }
    });

    // this.editor.insertContent(this.data);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
