import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  favoritos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FirebaseProvider) {
    this.favoritos = fb.getFavoritos();
  }

  ionViewDidLoad() {

  }

  toggleFavorito(codigo: any) {
    codigo.favorito = !codigo.favorito;
    this.fb.update('codigos', codigo.key, codigo);
  }


}
