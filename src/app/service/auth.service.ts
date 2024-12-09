import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs/internal/Observable';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private apiUrl = 'http://localhost/pandemic_back/'

  constructor(private http: HttpClient) { }

  registro(usuario: Usuario): Observable<any>{
    return this.http.post(this.apiUrl + 'registro.php', JSON.stringify(usuario));
  }

logear(login: Login): Observable<any>{
  return this.http.post(this.apiUrl + 'login.php', JSON.stringify(login));
}

}
