import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaNotasPage } from './lista-notas';

@NgModule({
  declarations: [
    ListaNotasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaNotasPage),
  ],
})
export class ListaNotasPageModule {}
