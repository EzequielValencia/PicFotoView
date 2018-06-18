import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CrearNotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-nota',
  templateUrl: 'crear-nota.html',
})
export class CrearNotaPage {
  private nota:any={
    titulo:'',
    cuerpo:'',
    adjuntos:[]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearNotaPage');
  }

  public cerrarNota(){
    
  }
}
