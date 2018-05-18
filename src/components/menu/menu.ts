import { Component } from '@angular/core';
import {App} from 'ionic-angular';
import { AlertController,MenuController } from 'ionic-angular';
import {LoginProvider} from '../../providers/login/login';
import {LoginPage}  from '../../pages/login/login';

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
              private loginProvider:LoginProvider,
              private app:App,
              private menu:MenuController) {

  }
  public cerrarSecion(){
    this.menu.close();
    this.alerta.create({
      subTitle:"Esta seguro de cerrar sesión",
      buttons:[{
        text:'Cancelar',
        role:'cancel',
        handler:()=>{

        }
      },{
        text:'Cerrar seción',
        handler:()=>{
          this.loginProvider.cerrarSecion();
          this.app.getActiveNav().setRoot(LoginPage);
        }
      }]
    }).present();
  }
}
