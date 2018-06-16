import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { CodigosPage } from '../codigos/codigos';
import { SobrePage } from '../sobre/sobre';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabFavoritos = FavoritosPage;
  tabCodigos = CodigosPage;
  tabSobre = SobrePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
