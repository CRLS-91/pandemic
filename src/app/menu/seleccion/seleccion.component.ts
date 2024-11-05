import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion',
  standalone: true,
  imports: [],
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {

  constructor(private router: Router) {} // Inyección de Router

  iniciar() {
    this.router.navigate(['/login']); // Navegar al componente de Registro
  }

}
