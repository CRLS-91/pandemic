// Importamos NgModule desde @angular/core, que es un decorador que se utiliza para definir un módulo en Angular.
import { NgModule } from '@angular/core';
// Importamos RouterModule y Routes desde @angular/router, que son necesarios para la configuración de rutas en Angular.
import { RouterModule, Routes } from '@angular/router';
// Importamos el componente MapaImagenComponent que se utilizará en las rutas definidas.
import { MapaImagenComponent } from './mapa-imagen/mapa-imagen.component';

// Definimos un arreglo de rutas, que es un conjunto de objetos que especifican cómo se deben manejar las diferentes URL en la aplicación.
const routes: Routes = [
  // La primera ruta es la ruta por defecto. Cuando la URL está vacía (es decir, el usuario accede a la raíz de la aplicación),
  // se cargará el componente MapaImagenComponent.
  { path: '', component: MapaImagenComponent },
  
  // La segunda ruta es una ruta específica. Cuando el usuario accede a la URL '/mapaImagen',
  // también se cargará el mismo componente MapaImagenComponent.
  { path: 'mapaImagen', component: MapaImagenComponent },
];

// Usamos el decorador NgModule para definir un módulo de Angular.
// Este módulo se encargará de la configuración de las rutas.
@NgModule({
  // En la propiedad 'imports', importamos el RouterModule y le pasamos las rutas definidas anteriormente
  // usando el método forChild. Esto es útil para módulos de características que tienen sus propias rutas.
  imports: [RouterModule.forChild(routes)],
  
  // En la propiedad 'exports', exportamos el RouterModule para que otros módulos de la aplicación
  // puedan utilizar las rutas definidas en este módulo.
  exports: [RouterModule]
})
// Finalmente, exportamos la clase MapaRoutingModule para que pueda ser utilizada en otros módulos de la aplicación.
export class MapaRoutingModule { }