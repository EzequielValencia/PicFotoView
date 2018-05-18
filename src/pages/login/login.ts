import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { AlertController, Platform, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { ListaMateriasPage } from '../lista-materias/lista-materias';
import { RegitrarPage } from '../regitrar/regitrar'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mostrarSpiner:boolean;
  email:string;
  password:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private loginProvider:LoginProvider,
              private alert:AlertController,
              private platform:Platform,
              private storage:Storage,
              private toast:ToastController) {
    this.mostrarSpiner=false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login(){
    this.mostrarSpiner=true;
    console.log("Estoy en login "+this.mostrarSpiner);
    console.log("Email "+this.email+" pass: "+this.password);
    this.loginProvider.hacerLogin(this.email,this.password).subscribe((data:any)=>{
      if(data.status ==404){

        this.alert.create({
          title:"Error al iniciar sesión",
          subTitle:"Verifique el password y el correo",
          buttons:['Aceptar']
        }).present();

      }else if(data.status == 200){
        
        if(this.platform.is('cordova')){
          this.storage.set('token',data.token);
          this.storage.set('user_id',data.user_id);
        }else{
          localStorage.setItem('token',data.token);
          localStorage.setItem('user_id',data.user_id);
        }
        
        this.toast.create({
           message:"Bienvenido",
           duration:3000
        }).present();
        this.navCtrl.setRoot(ListaMateriasPage);

      }else{
        
        this.alert.create({
          title:"Problema al iniciar sesión",
          subTitle:"Intentelo más tarde",
          buttons:['Aceptar']
        }).present();

      }
      
      this.mostrarSpiner=false;
    });
  }

  public irARegistrar(){
    this.navCtrl.push(RegitrarPage);
  }
}
