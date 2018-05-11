import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearNotaPage } from './crear-nota';

@NgModule({
  declarations: [
    CrearNotaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearNotaPage),
  ],
})
export class CrearNotaPageModule {}
