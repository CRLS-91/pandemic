import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './auth/inicio/inicio.component';
import { RegistroComponent } from './auth/registro/registro.component';


export const routes: Routes = [


{path:'',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
{path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
{path:'perfil',loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule)},
{path:'menu',loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)},
{path:'mapa',loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule)},
];
