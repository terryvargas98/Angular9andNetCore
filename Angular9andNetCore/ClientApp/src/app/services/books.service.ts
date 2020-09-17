import {Injectable } from '@angular/core'


@Injectable()


  export class BookService {

    Book: any[] = [{ id :'1' , titulo: '100 años de soledad', costo: 150, }, { id:'2' , titulo: 'Cachorros', costo: 120 }];

    GetBooks() {

      return this.Book;
    }
  }
