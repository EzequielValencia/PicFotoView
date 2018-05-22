import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ListaMateriasPage } from '../pages/lista-materias/lista-materias';

import { LoginProvider } from '../providers/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    private loginProvider:LoginProvider) {
    if(this.loginProvider.existeSessionIniciada()){

      this.rootPage = ListaMateriasPage;

    }else{

      this.rootPage = LoginPage;

    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

  public cerrarSecion(){
    this.loginProvider.cerrarSecion();
    this.rootPage = LoginPage;
  }
}
