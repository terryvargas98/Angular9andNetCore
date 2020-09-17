import { Component } from '@angular/core'
import { BookService } from '../services/books.service';

@Component({

  selector: 'books',
  templateUrl: './books.component.html'

})

export class BooksComponent {

  MyBooks: any[];

  constructor(private ServicioBooks: BookService) {

   this.MyBooks = this.ServicioBooks.GetBooks();
  }

  CarritoCompras(id,cantidad) {
   
  }


  }


