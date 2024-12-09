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
  //constructor(private router : Router) {} //se añade la , para poder añadir un constructor nuevo cuando ya hay uno
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

    if (this.miFormulario.valid) {
  
      const usuario: Usuario={
        nombre: this.miFormulario.value.nombre,
        email: this.miFormulario.value.email,
        password: this.miFormulario.value.password

      };

   this.authServive.registro(usuario).subscribe(
    response => {
      console.log(response);
    }
   );

    } else {
      console.log('Alguno de los datos es incorrecto');
    }
  }  
}
