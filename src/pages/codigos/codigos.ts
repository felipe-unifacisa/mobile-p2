import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs'

@IonicPage()
@Component({
  selector: 'page-codigos',
  templateUrl: 'codigos.html',
})
export class CodigosPage {

  novoCodigo: Object = new Object();

  codigos:Observable<any>; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FirebaseProvider, public alertCtrl: AlertController) {
    this.codigos = this.fb.getAll('codigos');
  }

  ionViewDidLoad() {
    
  }

  toggleFavorito(codigo: any) {
    codigo.favorito = !codigo.favorito;
    this.fb.update('codigos', codigo.key, codigo);
  }

  criarNovoCodigo() {
    let alert = this.alertCtrl.create({
      title: 'Novo Código',
      message: 'Digite o título e linguagem do novo código:',
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Código',
        },
        {
          name: 'linguagem',
          placeholder: 'Linguagem'
        }
      ],
      buttons: [
        {
          text: 'Salvar',
          handler: data => {
            this.novoCodigo['codigo'] = data.codigo;
            this.novoCodigo['linguagem'] = data.linguagem;
            this.novoCodigo['favorito'] = false;
            this.fb.save(this.novoCodigo);
            this.novoCodigo = new Object();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    alert.present();
  }

}
