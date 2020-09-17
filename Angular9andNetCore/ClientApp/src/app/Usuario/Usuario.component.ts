import { Component , Inject} from '@angular/core'
import { UsuarioService } from '../services/Usuario.service';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';




@Component({

  selector: 'app-usuario',
  templateUrl: './Usuario.component.html'


})

export class UsuarioComponent {

  Usuarios: Usuario[];
  

  constructor(private http: HttpClient, private UsuarioService: UsuarioService) {

    this.UsuarioService.GetDataUser().subscribe(result => {
      this.Usuarios = result;
      console.log(this.Usuarios);
    })

  };

  }



   
   
  


