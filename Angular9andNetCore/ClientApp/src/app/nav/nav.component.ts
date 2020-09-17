import { Component } from '@angular/core';
import { Persona } from '../interfaces/Persona';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',

})


export class NavComponent {

  Person: Persona = {
    id: 0, nombre:"", apellido:""
  };
  ListaPerson: Persona[] = [];

  SavePersona() {

    this.Person.id = this.ListaPerson.length + 1;
    this.ListaPerson.push(this.Person);
    this.Person =
    {
      id: 0, nombre: "", apellido: ""
    };

  }
}
