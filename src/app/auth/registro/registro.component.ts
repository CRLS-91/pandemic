import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Usuario } from '../../models/usuario.model';





@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //constructor(private router : Router) {} //se añade la , para poder añadir un constructor nuevo cuando ya hay uno
  constructor(private router : Router) {} //se añade la , para poder añadir un constructor nuevo cuando ya hay uno

  // Formulario reactivo con validaciones
  miFormulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, ); // Añade el validador personalizado


  // Método para enviar el formulario
  enviar() {

    if (this.miFormulario.valid) {
  
      const usuario: Usuario={
        nombre: this.miFormulario.value.nombre,
        password: this.miFormulario.value.password,
        email: this.miFormulario.value.email,

      }

   
    } else {
      console.log('Alguno de los datos es incorrecto');
    }
  }

  // Método para navegar al login
 // irALogin() {
   // this.router.navigate(['/login']);
  //}

  
}
