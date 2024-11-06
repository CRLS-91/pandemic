import { Routes } from '@angular/router';
import { InicioComponent } from './autentificacion/inicio/inicio.component';

import { LoginComponent } from './autentificacion/login/login.component';





InicioComponent
export const routes: Routes = [
{path:'',component:InicioComponent},
{path:'login', component: LoginComponent},

{path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];
