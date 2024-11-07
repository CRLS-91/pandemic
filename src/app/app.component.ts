import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SeleccionComponent } from "./menu/seleccion/seleccion.component";
import { InformacionComponent } from "./menu/informacion/informacion.component";
import { AutoresComponent } from "./menu/autores/autores.component";
import { VersionComponent } from "./menu/version/version.component";
import { RegistroComponent } from "./auth/registro/registro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
