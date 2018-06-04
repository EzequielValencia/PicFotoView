import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController,AlertController } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { MateriasProvider } from '../../providers/materias/materias'
/**
 * Generated class for the AgregarMateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-materia',
  templateUrl: 'agregar-materia.html',
})
export class AgregarMateriaPage {
  public form 	: FormGroup;
  constructor( public navParams: NavParams,
               public viewController:ViewController,
               private _FB : FormBuilder,
               private materiasProvider:MateriasProvider,
               private alerta:AlertController) {
    this.form = this._FB.group({
      nombreMateria       	  : ['', Validators.required],
      horario     : this._FB.array([
         this.initTechnologyFields()
      ])
   });
  }

  initTechnologyFields() : FormGroup{
   return this._FB.group({
      dia : ['', Validators.required],
      horaInicio : ['', Validators.required],
      horaFin : ['', Validators.required]
   });
}

  ionViewDidLoad() {
  }

  public cerrar(){
    this.viewController.dismiss();
  }

  public addNewInputField(){
     const control = <FormArray>this.form.controls.horario;
     control.push(this.initTechnologyFields());
  }

  public removeInputField(i : number) : void{
   const control = <FormArray>this.form.controls.horario;
   control.removeAt(i);
  }

  public manage(val : any) : void{

      this.materiasProvider.guardarMateria(val).subscribe((resp)=>{
        if(resp.ok){
          this.alerta.create({
            title:"Exito",
            subTitle:resp.message,
            buttons:['Aceptar']
          }).present();
          this.viewController.dismiss();
        }else{
          this.alerta.create({
            title:"Error",
            subTitle:resp.message,
            buttons:['Aceptar']
          }).present();
        }
      });

   }

}
