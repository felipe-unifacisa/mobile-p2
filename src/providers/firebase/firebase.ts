import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

@Injectable()
export class FirebaseProvider {

  constructor(public firebase: AngularFireDatabase) {
  }

  getAll(endpoint: string) {
    return this.firebase.list(endpoint).snapshotChanges().map(res => {
      return res.map(obj => ({ key: obj.payload.key, ...obj.payload.val() }));
    });
  }

  getFavoritos() {
    return this.firebase.list('codigos').snapshotChanges().map(res => {
      return res.map(obj => ({ key: obj.payload.key, ...obj.payload.val() })).filter( obj => obj['favorito'] === true);
    });
  }

  update(endpoint: string, key: string, obj: any) {
    this.firebase.list(endpoint).update(key, obj)
  }

  save(obj: any) {
    this.firebase.list('codigos').push(obj);
  }
}
