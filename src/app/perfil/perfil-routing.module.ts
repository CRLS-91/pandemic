import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './perfilusuario/perfilusuario.component';

const routes: Routes = [
  {path:'', component:PerfilUsuarioComponent},
  {path:'perfil', component:PerfilUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
