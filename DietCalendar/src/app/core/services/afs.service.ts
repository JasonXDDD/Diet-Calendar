import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfsService {

  dietCollection: AngularFirestoreCollection;
  diets: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.dietCollection = db.collection('diet');
    this.diets = this.dietCollection.valueChanges();
  }

  async doAddItem(data) {
    await this.dietCollection.add(data);
    return true;
  }

  doGet() {
    return this.diets;
  }
}
