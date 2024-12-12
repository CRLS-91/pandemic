// Importación de `ApplicationConfig` desde Angular Core
import { ApplicationConfig } from '@angular/core';
// `ApplicationConfig`: Es un objeto usado para definir la configuración principal de la aplicación en Angular 15+,
// reemplazando el enfoque basado en módulos tradicionales (`AppModule`).

// Importación de `provideRouter` desde Angular Router
import { provideRouter } from '@angular/router';
// `provideRouter`:  Permite configurar las rutas de la aplicación Angular mediante un objeto que contiene las rutas definidas.

import { provideHttpClient } from '@angular/common/http';
// `provideHttpClient`: Habilita el uso de `HttpClient` en toda la aplicación para realizar solicitudes HTTP a servicios backend (como servicios en PHP).

import { routes } from './app.routes';
// `routes`: Importa las rutas definidas en el archivo `app.routes.ts`, que organiza las rutas de la aplicación.

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// `provideAnimationsAsync`: Habilita animaciones de manera asíncrona para mejorar el rendimiento de la aplicación.
// Es útil en componentes o bibliotecas que dependen de animaciones, como Angular Material.

// Configuración principal de la aplicación Angular
export const appConfig: ApplicationConfig = {
  providers: [
    // Configuración del enrutador Angular
    provideRouter(routes),
    // Asocia las rutas definidas en `app.routes.ts` al enrutador Angular.

    // Habilitación de animaciones de manera eficiente
    provideAnimationsAsync(),
    // Proporciona soporte para animaciones en componentes que lo requieran.

    // Proveedor para manejar solicitudes HTTP en la aplicación
    provideHttpClient(),
    // Permite el uso de `HttpClient` para realizar solicitudes HTTP. Esto es necesario, por ejemplo,
    // para conectar con un backend en PHP o cualquier API REST.
  ],
};

// Nota: Este archivo reemplaza al archivo tradicional `AppModule.ts`.
// A partir de Angular 15, `ApplicationConfig` se utiliza para definir la configuración global de una aplicación,
// simplificando la estructura y eliminando la necesidad de módulos tradicionales.
