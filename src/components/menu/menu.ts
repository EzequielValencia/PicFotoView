import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import {LoginProvider} from '../../providers/login/login'

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor(private alerta:AlertController,
              private loginProvider:LoginProvider) {

  }
  public cerrarSecion(){
    this.alerta.create({
      title:"Esta seguro de cerrar seción",
      buttons:[{
        text:'Cancelar',
        role:'cancel',
        handler:()=>{

        }
      },{
        text:'Cerrar seción',
        handler:()=>{
          this.loginProvider.cerrarSecion();
        }
      }]
    }).present();
  }
}
