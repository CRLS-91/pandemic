import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule para el botón


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Formulario reactivo con validaciones
  miFormulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, ); // Añade el validador personalizado

  constructor(private router: Router) {}

  // Método para enviar el formulario
  enviar() {
    if (this.miFormulario.valid) {
      console.log('Formulario válido:', this.miFormulario.value);
    } else {
      console.log('Alguno de los datos es incorrecto');
    }
  }

  // Método para navegar al login
  irALogin() {
    this.router.navigate(['/login']);
  }

  
}
