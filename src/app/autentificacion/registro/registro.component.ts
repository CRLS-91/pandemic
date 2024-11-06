import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  miFormulario= new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    emial : new FormControl('', [Validators.required, Validators.email]),
    mensaje : new FormControl('', [Validators.required])
});

  enviar(){
    if (this.miFormulario.valid){
      console.log(this.miFormulario.valid)
    }else{
      console.log("alguno de los datos es incorrecto");
    }
  }

  irALogin() {
    throw new Error('Method not implemented.');
    }
    username: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';

      constructor(private router: Router) {} // Inyección de Router
    
      login() {
        
        console.log('Nombre de usuario:', this.username);
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Confirmar Contraseña:', this.confirmPassword);
        
      }
     
      vamosLogin() {
        this.router.navigate(['/login']); 
      }

}
