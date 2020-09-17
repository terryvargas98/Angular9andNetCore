import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { environment } from '../../environments/environment';



@Injectable()

export class UsuarioService {

  public listaUsuario: Usuario[];
  MyAppUrl = environment.BASE_URL;
  constructor(private http: HttpClient, ) {


  }
  GetDataUser() {
    return this.http.get<Usuario[]>(this.MyAppUrl + "User/Usuario/GetUsers");
      
   
   
   }
}
