import { Routes } from '@angular/router';
/* Importa el tipo `Routes` desde el módulo `@angular/router` para definir las rutas del sistema de navegación de Angular */

export const routes: Routes = [
  /* Define un arreglo de rutas que Angular utilizará para la navegación dentro de la aplicación */

  {path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  /* 
    Ruta por defecto ('') que carga el módulo de autenticación.
    - `path: ''` define que esta es la ruta raíz de la aplicación.
    - `loadChildren` es una función de carga diferida (lazy loading) que importa dinámicamente el módulo `AuthModule`.
    - Esto mejora el rendimiento al cargar solo el código necesario cuando el usuario accede a esta ruta.
  */

  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  /* 
    Ruta para las páginas relacionadas con autenticación.
    - `path: 'auth'` indica que esta ruta corresponde al segmento '/auth'.
    - Carga diferida del módulo `AuthModule` que contiene las vistas de inicio de sesión, registro, etc.
  */

  {path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)},
  /* 
    Ruta para la página de perfil del usuario.
    - `path: 'perfil'` corresponde al segmento '/perfil'.
    - Carga diferida del módulo `PerfilModule`, que incluye vistas relacionadas con la gestión del perfil del usuario.
  */

  {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
  /* 
    Ruta para la sección del menú principal de la aplicación.
    - `path: 'menu'` corresponde al segmento '/menu'.
    - Carga diferida del módulo `MenuModule`, que contiene las vistas relacionadas con el menú principal.
  */

  {path: 'mapa', loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule)},
  /* 
    Ruta para la página del mapa interactivo.
    - `path: 'mapa'` corresponde al segmento '/mapa'.
    - Carga diferida del módulo `MapaModule`, que incluye las vistas y funcionalidades relacionadas con el mapa.
  */
];
