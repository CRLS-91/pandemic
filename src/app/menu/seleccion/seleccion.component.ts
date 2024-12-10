import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-seleccion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {

  constructor(private router: Router) {} // Inyección de Router

  

}
