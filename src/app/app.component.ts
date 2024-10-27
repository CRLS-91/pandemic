import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PerfilusuarioComponent } from "./perfil/perfilusuario/perfilusuario.component";
import { InicioComponent } from "./autentificacion/inicio/inicio.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PerfilusuarioComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
