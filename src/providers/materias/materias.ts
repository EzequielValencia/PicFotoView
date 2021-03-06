import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../app/constantes';
import { LoginProvider } from '../login/login';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the MateriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriasProvider {
  constructor(public http: HttpClient,
  			  public login:LoginProvider          ) {

  }

  public getMaterias(){
    return new Promise((respuesta,rechaso)=>{
      this.http.get(API_URL+'/materias?token='+this.login.getCredenciales().token).subscribe(data=>{
        respuesta(data);
      }),error=>{
        rechaso(error);
      }
    });
  }

  public guardarMateria(materia){
    return this.http.post(API_URL+'materias?token='+this.login.getCredenciales().token,materia).map( (resp:Response)=>{
                          return resp;
                        });
  }
}
