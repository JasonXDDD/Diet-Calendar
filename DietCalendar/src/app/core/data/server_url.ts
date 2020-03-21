import { environment } from '@env/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerUrl {
  readonly gasAPI = 'https://script.google.com/a/gms.tku.edu.tw/macros/s/AKfycbyZQTRr6km3bsoF6JKLk3TXzqU2vaUZdhlkayJ-Gw/exec';
  readonly imgurAPI = 'https://api.imgur.com/3/image';
}
