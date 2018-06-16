import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { CodigosPage } from '../pages/codigos/codigos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CodigosPage,
    FavoritosPage,
    SobrePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CodigosPage,
    FavoritosPage,
    SobrePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
