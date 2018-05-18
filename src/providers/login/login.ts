import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API_URL} from '../../app/constantes';
import {Storage} from '@ionic/storage';
import { Platform } from 'ionic-angular';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  private credenciales:any={token:null,user_id:null};

  constructor( public http: HttpClient,
              private storage:Storage,
              private platform:Platform) {

  }

  private verificarSessionIniciada(){

    if(this.platform.is('cordova')){
      this.credenciales.user_id=this.storage.get('user_id');
      this.credenciales.token=this.storage.get('token');
    }else{
      this.credenciales.user_id=localStorage.getItem('user_id');
      this.credenciales.token=localStorage.getItem('token');
    }

  }

  public existeSessionIniciada(){
    this.verificarSessionIniciada();
    return  this.credenciales.token!=null && this.credenciales.user_id!=null;
  }

  public hacerLogin(email:string,password:string){
    return this.http.post(API_URL+'login',{email:email,password:password});
  }

  public cerrarSecion(){
    console.log("Cerrando secion");
    if(this.platform.is('cordova')){
      this.storage.remove('token');
      this.storage.remove('user_id');
    }else{
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
    }
  }
  public getCredenciales(){
    return this.credenciales;
  }
}
