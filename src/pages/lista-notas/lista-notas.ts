import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CrearNotaPage} from '../index.pages';
/**
 * Generated class for the ListaNotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-notas',
  templateUrl: 'lista-notas.html',
})
export class ListaNotasPage {
  public paginaNota = CrearNotaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaNotasPage');
  }

}
