import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InicioComponent } from "./autentificacion/inicio/inicio.component";
import { SeleccionComponent } from "./menu/seleccion/seleccion.component";
import { InformacionComponent } from "./menu/informacion/informacion.component";
import { AutoresComponent } from "./menu/autores/autores.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InicioComponent, SeleccionComponent, InformacionComponent, AutoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
