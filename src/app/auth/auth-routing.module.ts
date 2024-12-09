import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'inicio' , component: InicioComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registro' , component: RegistroComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { 
  


}
