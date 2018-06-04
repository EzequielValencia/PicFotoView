import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';


//Providers
import { NotasProvider } from '../providers/notas/notas';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { MateriasProvider } from '../providers/materias/materias';
import { HorarioProvider } from '../providers/horario/horario';

//Paginas de la aplicacion
import {LoginPage} from '../pages/index.pages';
import {ListaNotasPage} from '../pages/index.pages';
import {ListaMateriasPage} from '../pages/index.pages';
import {CrearHorarioPage} from '../pages/index.pages';
import {HorarioPage} from '../pages/index.pages';
import {RegitrarPage as RegistrarPage} from '../pages/index.pages';
import { HomePage } from '../pages/home/home';
import {AgregarMateriaPage} from '../pages/agregar-materia/agregar-materia';
import { LoginProvider } from '../providers/login/login';

//components
import {MenuComponent} from '../components/menu/menu';
import {ElementsHorarioComponent} from '../components/elements-horario/elements-horario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrarPage,
    HorarioPage,
    CrearHorarioPage,
    ListaMateriasPage,
    ListaNotasPage,
    LoginPage,
    MenuComponent,
    AgregarMateriaPage,
    ElementsHorarioComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrarPage,
    HorarioPage,
    CrearHorarioPage,
    ListaMateriasPage,
    ListaNotasPage,
    LoginPage,
    AgregarMateriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotasProvider,
    UsuarioProvider,
    MateriasProvider,
    HorarioProvider,
    LoginProvider
  ]
})
export class AppModule {}
