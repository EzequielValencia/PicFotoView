import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriasProvider } from '../../providers/materias/materias';
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
  			  public materiasProvider:MateriasProvider) {
    this.verEnLista=true;
    this.verEnGrid=false;
    this.buscarMateria=false;
  	this.materiasProvider.getMaterias().then(data=>{
      console.log(data);

      this.materias = data;

    }).catch(error=>{

      console.log(error);

    });

    console.log(this.materias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaMateriasPage');
  }

  public irANotas(materia:any){
    console.log(materia);
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
