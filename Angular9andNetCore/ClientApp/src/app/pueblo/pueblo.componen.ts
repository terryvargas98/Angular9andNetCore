import { Component,OnInit } from '@angular/core';

import { RegisterService } from '../services/Register.service';
import { Post } from '../interfaces/Post';

@Component({

  selector: 'app-pueblo',
  templateUrl: './pueblo.component.html',
})

export class PuebloComponent {
  Usuario: Post;
  constructor(private ServicioRegistro: RegisterService) {

  }
  ngOnInit() {

    this.ServicioRegistro.getData().subscribe((data: Post) => {

      this.Usuario = data;
      console.log(this.Usuario);
    })
  }
  }
