// Importa el decorador Component desde Angular core
import { Component } from '@angular/core';
// Importa RouterModule para manejar la navegación en la aplicación
import { RouterModule } from '@angular/router';

// Define un componente llamado 'InicioComponent'
@Component({
  // Selector que se usará para incluir este componente en otros templates
  selector: 'app-inicio',
  // Indica que este componente es independiente y puede ser utilizado sin necesidad de un módulo
  standalone: true,
  // Importa RouterModule para que el componente pueda usar funcionalidades de enrutamiento(hacer routerlink en botones)
  imports: [RouterModule],
 
  templateUrl: './inicio.component.html',
  
  styleUrl: './inicio.component.css'
})
// Exporta la clase InicioComponent
export class InicioComponent {
  // Aquí se pueden agregar propiedades y métodos para la lógica del componente
}