import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../auth/inicio/inicio.component';
import { AutoresComponent } from './autores/autores.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { VersionComponent } from './version/version.component';


const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'informacion',component:InformacionComponent},
  {path:'autores',component:AutoresComponent},
  {path:'seleccion',component:SeleccionComponent},
  {path:'version', component:VersionComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
