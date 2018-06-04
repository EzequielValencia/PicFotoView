import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarMateriaPage } from './agregar-materia';

@NgModule({
  declarations: [
    AgregarMateriaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarMateriaPage),
  ],
})
export class AgregarMateriaPageModule {}
