import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodigosPage } from './codigos';

@NgModule({
  declarations: [
    CodigosPage,
  ],
  imports: [
    IonicPageModule.forChild(CodigosPage),
  ],
})
export class CodigosPageModule {}
