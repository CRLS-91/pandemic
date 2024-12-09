import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PerfilUsuarioComponent } from "./perfil/perfilusuario/perfilusuario.component";
import { SeleccionComponent } from "./menu/seleccion/seleccion.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
