
import { Component } from '@angular/core'; // Importa el decorador Component para definir un componente Angular
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar peticiones HTTP
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa clases y módulos para manejar formularios reactivos
import { Router } from '@angular/router'; // Importa Router para la navegación entre rutas
import { CommonModule } from '@angular/common'; // Importa CommonModule que contiene directivas comunes de Angular
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa el módulo de Angular Material para campos de formulario
import { MatButtonModule } from '@angular/material/button'; // Importa el módulo de Angular Material para botones
import { MatInputModule } from '@angular/material/input'; // Importa el módulo de Angular Material para inputs
import { Login } from '../../models/login.model'; // Importa el modelo de datos para el login, que define la estructura del objeto de login
import { AuthService } from '../../service/auth.service'; // Importa el servicio de autenticación que maneja la lógica de inicio de sesión
import { RouterModule } from '@angular/router'; // Importa RouterModule para habilitar el enrutamiento en el componente

@Component({
  selector: 'app-login', // Define el selector del componente, que se usará en la plantilla HTML
  standalone: true, // Indica que este componente es independiente y no necesita ser declarado en un módulo
  imports: [
    FormsModule, // Importa el módulo para formularios, necesario para usar formularios en Angular
    ReactiveFormsModule, // Importa el módulo para formularios reactivos, que permite crear formularios más dinámicos
    CommonModule, // Importa el módulo común de Angular que proporciona directivas comunes
    MatFormFieldModule, // Importa el módulo de Angular Material para crear campos de formulario estilizados
    MatInputModule, // Importa el módulo de Angular Material para inputs estilizados
    MatButtonModule, // Importa el módulo de Angular Material para botones estilizados
    RouterModule  // Importa el módulo de enrutamiento para permitir la navegación entre diferentes componentes
  ],
  templateUrl: './login.component.html', // Especifica la ruta del archivo de plantilla HTML que define la vista del componente
  styleUrls: ['./login.component.css'], // Especifica la ruta del archivo de estilos CSS que define el estilo del componente
  
})

export class LoginComponent {

  // Constructor del componente, donde se inyectan las dependencias necesarias
  constructor(
    private fb: FormBuilder, // Inyección del FormBuilder para crear y gestionar formularios reactivos
    private http: HttpClient, // Inyección del HttpClient para realizar peticiones HTTP a un servidor
    private router: Router, // Inyección del Router para manejar la navegación entre rutas
    private authService: AuthService // Inyección del servicio de autenticación para manejar el inicio de sesión
  ) {}

  // Definición del formulario de login utilizando FormGroup y FormControl
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Campo de email con validaciones: requerido y debe ser un email válido
    password: new FormControl('', [Validators.required]) // Campo de contraseña con validación: requerido
  });

  // Método que se llama al intentar iniciar sesión
  irALogin() {
    // Verifica si el formulario es válido antes de proceder
    if (this.loginForm.valid) {
      
      // Crea un objeto de login con los valores del formulario
      const login: Login = {
        email: this.loginForm.value.email, // Obtiene el valor del campo email
        password: this.loginForm.value.password // Obtiene el valor del campo password
      };

      // Llama al servicio de autenticación para iniciar sesión
      this.authService.logear(login).subscribe(
        response => {
          console.log(response); // Muestra la respuesta del servidor en la consola
        }
      );
            
    } else {
      // Mensaje de error si el formulario no es válido
      console.log('Por favor, completa todos los campos correctamente.'); // Indica al usuario que complete el formulario correctamente
    }
  }
}