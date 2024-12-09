import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Login } from '../../models/login.model';
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule  //para poder hacer routerLInk con los botones
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
   password: new FormControl('', [Validators.required])
});
  


  


  irALogin() {
    if (this.loginForm.valid) {
      
const login: Login = {
email: this.loginForm.value.email,
password: this.loginForm.value.password
};

this.authService.logear(login).subscribe(
  response =>{
    console.log(response)
  }
);
            
    } else {
      console.log('Por favor, completa todos los campos correctamente.');
    }
  }
}

