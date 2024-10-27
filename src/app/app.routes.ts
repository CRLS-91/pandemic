import { Routes } from '@angular/router';
import { InicioComponent } from './autentificacion/inicio/inicio.component';
import { PerfilusuarioComponent } from './perfil/perfilusuario/perfilusuario.component';
import { LoginComponent } from './autentificacion/login/login.component';
import { RegistroComponent } from './autentificacion/registro/registro.component'
InicioComponent
export const routes: Routes = [
{path:'',component:InicioComponent},
{path:'login', component: LoginComponent},
{path:'registro', component: RegistroComponent},

];
