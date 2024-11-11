import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule para el botón
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
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
