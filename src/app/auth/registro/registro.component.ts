import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../service/auth.service';






@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,RouterModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //constructor(private router : Router) {} //se añade la , para poder añadir un constructor nuevo cuando ya hay uno ponemos tambien el auth service para conectar php
  constructor(private router : Router, private authServive : AuthService) {} //se añade la , para poder añadir un constructor nuevo cuando ya hay uno

  // Formulario reactivo con validaciones
  miFormulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
   // mensaje: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, ); 
  // Añade el validador personalizado


  // Método para enviar el formulario
enviar() {
  // Verifica si el formulario es válido
  if (this.miFormulario.valid) {
    // Si el formulario es válido, crea un objeto `usuario` basado en la interfaz `Usuario`
    const usuario: Usuario = { // Usamos la interfaz `Usuario` para garantizar que el objeto cumple con la estructura requerida
      nombre: this.miFormulario.value.nombre, // Asigna el valor del campo `nombre` del formulario
      email: this.miFormulario.value.email,   // Asigna el valor del campo `email` del formulario
      password: this.miFormulario.value.password, // Asigna el valor del campo `password` del formulario
    };

    // Llama al servicio de autenticación para registrar al usuario
    this.authServive.registro(usuario).subscribe(
      response => {
        // Maneja la respuesta del backend (éxito o error)
        console.log(response);
        alert(response.message);
        this.miFormulario.reset(); // Limpia el formulario después del registro
      },
      error => {
        console.error('Error:', error);
        alert('Error al conectar con el servidor.');
      }
    ).add(() => {
      console.log("Registro completado.");
    });
    

  } else {
    // Si el formulario no es válido, muestra un mensaje de error en la consola
    console.log('Alguno de los datos es incorrecto');
  }
}

}
