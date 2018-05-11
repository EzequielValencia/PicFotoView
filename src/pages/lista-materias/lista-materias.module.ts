import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaMateriasPage } from './lista-materias';

@NgModule({
  declarations: [
    ListaMateriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaMateriasPage),
  ],
})
export class ListaMateriasPageModule {}
