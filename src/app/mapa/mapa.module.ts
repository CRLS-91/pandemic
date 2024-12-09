// Importamos NgModule desde @angular/core, que es un decorador utilizado para definir un módulo en Angular.
import { NgModule } from '@angular/core';
// Importamos CommonModule desde @angular/common, que proporciona funcionalidades comunes para los módulos de Angular.
import { CommonModule } from '@angular/common';
// Importamos MapaRoutingModule, que es el módulo de enrutamiento específico para el módulo Mapa.
import { MapaRoutingModule } from './mapa-routing.module';

// Usamos el decorador NgModule para definir el módulo MapaModule.
@NgModule({
  // En la propiedad 'declarations', se declaran los componentes, directivas y pipes que pertenecen a este módulo.
  // En este caso, está vacío porque no se han declarado componentes en este módulo.
  declarations: [],
  
  // En la propiedad 'imports', se especifican otros módulos que este módulo necesita.
  // Aquí importamos CommonModule, que proporciona directivas comunes como ngIf y ngFor,
  // y MapaRoutingModule, que contiene la configuración de rutas para este módulo.
  imports: [
    CommonModule,
    MapaRoutingModule
  ]
})
// Exportamos la clase MapaModule para que pueda ser utilizada en otros módulos de la aplicación.
export class MapaModule { }