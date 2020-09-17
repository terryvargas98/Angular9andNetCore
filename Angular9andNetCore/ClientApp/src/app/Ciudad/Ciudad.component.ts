import { Component,Input } from '@angular/core';
import { Persona } from '../interfaces/Persona';
import { RegisterService } from '../services/Register.service';



@Component({

  selector: 'app-ciudad',
  templateUrl:'./Ciudad.component.html',
  
  

})

export class CiudadComponent {

  @Input('ListaPersonas') ListaPerson: Persona;
 


 

  }
