import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilusuarioComponent } from "./perfil/perfilusuario/perfilusuario.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilusuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pandemic';
}
