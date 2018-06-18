import { Component } from '@angular/core';
import { AlertController,MenuController,App} from 'ionic-angular';
import {LoginProvider} from '../../providers/login/login';
import {LoginPage}  from '../../pages/login/login';
import {ListaNotasPage,ListaMateriasPage} from '../../pages/index.pages';

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

  public verNotas(){
    this.app.getActiveNav().setRoot(ListaNotasPage);
    this.menu.close();
  }

  public verMaterias(){
    this.app.getActiveNav().setRoot(ListaMateriasPage);
    this.menu.close();
  }
}
