// Importa la clase HttpClient para hacer peticiones HTTP necesario para hacer lo de PHP.
import { HttpClient } from '@angular/common/http';
// Importa el decorador Injectable, necesario para que el servicio pueda ser inyectado.
import { Injectable } from '@angular/core';
// Importa el modelo Usuario, que representa los datos de un usuario.
import { Usuario } from '../models/usuario.model';
// Importa la clase Observable para manejar la respuesta de las peticiones HTTP de forma reactiva.
import { Observable } from 'rxjs/internal/Observable';
// Importa el modelo Login, que representa los datos de login de un usuario.
import { Login } from '../models/login.model';

// Marca la clase como un servicio que puede ser inyectado en otras partes de la aplicación.
// El parámetro providedIn: 'root' indica que el servicio será accesible en toda la aplicación.
@Injectable({
  providedIn: 'root'
})
// Define la clase AuthService, que se encarga de la lógica de autenticación y registro.
export class AuthService {

  // Define la URL base para las peticiones HTTP.
  private apiUrl = 'http://localhost/pandemic_back/'

  // El constructor recibe una instancia de HttpClient para hacer peticiones HTTP hacerlo para lo php.
  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario. Recibe un objeto de tipo Usuario.
  // Retorna un Observable de la respuesta de la petición HTTP aqui usamos usuario que esta en model/usuario.models.ts que es el Usuario el mismo nombre que pusimos en el models.
  registro(usuario: Usuario): Observable<any> {
    // Realiza una solicitud HTTP POST al servidor utilizando HttpClient.
    return this.http.post(this.apiUrl + 'registro.php', JSON.stringify(usuario));
    // `this.apiUrl` es la URL base de la API (por ejemplo, "https://localhost/pandemic_back/").
    // Concatenamos 'registro.php' al final para formar la URL completa de la petición.
    // JSON.stringify(usuario) convierte el objeto `usuario` en un string JSON para enviarlo al servidor.
}


  // Método para loguear a un usuario. Recibe un objeto de tipo Login.
  // Retorna un Observable de la respuesta de la petición HTTP.
  logear(login: Login): Observable<any> {
    // Realiza una petición POST enviando los datos de login al servidor.
    return this.http.post(this.apiUrl + 'login.php', JSON.stringify(login));
  }

}
