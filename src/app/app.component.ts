import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { InicioComponent } from "./autentificacion/inicio/inicio.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
