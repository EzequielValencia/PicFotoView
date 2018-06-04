import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MateriasProvider } from '../../providers/materias/materias';

import { AgregarMateriaPage } from '../agregar-materia/agregar-materia';
/**
 * Generated class for the ListaMateriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-materias',
  templateUrl: 'lista-materias.html',
})
export class ListaMateriasPage {

  public materias:any=[];
  public verEnLista:boolean;
  public verEnGrid:boolean;
  public buscarMateria:boolean;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public materiasProvider:MateriasProvider,
          public modalController:ModalController) {
    this.verEnLista=true;
    this.verEnGrid=false;
    this.buscarMateria=false;
    this.obtenerMaterias();
  }

  public obtenerMaterias(){
    this.materiasProvider.getMaterias().then(data=>{

      this.materias = data;
    }).catch(error=>{

    });
  }

  ionViewDidLoad() {
    
  }

  public irANotas(materia:any){
    console.log(materia);
  }

  public agregarMateria(){
      console.log("Agregar materia");
      let modalAgregarMateria = this.modalController.create(AgregarMateriaPage);
      modalAgregarMateria.onDidDismiss(()=>{
        this.obtenerMaterias();
      });
      modalAgregarMateria.present();
  }

  public verLista(){
    this.verEnLista=true;
    this.verEnGrid=false;
  }

  public verGrid(){
    this.verEnLista=false;
    this.verEnGrid=true;
  }

}
