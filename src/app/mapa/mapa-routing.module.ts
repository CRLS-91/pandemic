import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaImagenComponent } from './mapa-imagen/mapa-imagen.component';

const routes: Routes = [
  {path: '' , component: MapaImagenComponent},
  {path: 'mapaImagen' , component: MapaImagenComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapaRoutingModule { }
