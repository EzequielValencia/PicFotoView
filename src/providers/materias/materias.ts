import { HttpClient,HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app/constantes';
import { LoginProvider } from '../login/login';

/*
  Generated class for the MateriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriasProvider {
  constructor(public http: HttpClient,
  			  public login:LoginProvider) {
    console.log(this.login.getCredenciales().token);
  }

  public getMaterias(){
    return new Promise((respuesta,rechaso)=>{
      let cabeceras: Headers = new Headers();
      cabeceras.append('Content-Type','application/json');
         cabeceras.append('Accept', 'application/json');
         cabeceras.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
         cabeceras.append('Access-Control-Allow-Origin', '*');
         cabeceras.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
          let options = new HttpHeaders({'headers': JSON.stringify(cabeceras)});
          console.log(cabeceras);
      this.http.get(API_URL+'/materias?token='+this.login.getCredenciales().token,JSON.stringify(options)).subscribe(data=>{
        respuesta(data);
      }),error=>{
        rechaso(error);
      }
    });
  }
}
