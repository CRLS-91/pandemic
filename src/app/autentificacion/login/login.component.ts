import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

irALogin() {
throw new Error('Method not implemented.');
}
  email: string = '';  // Asegúrate de inicializar las propiedades
  password: string = '';

  constructor(private router: Router) {} // Inyección de Router

  login() {
    // Lógica para el inicio de sesión
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
  }

  irARegistro() {
    this.router.navigate(['/registro']); // Navegar al componente de Registro
  }

  perfil() {
    this.router.navigate(['./perfil/perfilusuario/perfilusuario']); // Navegar al componente de Registro
  }
  
}
