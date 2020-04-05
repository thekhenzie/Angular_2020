import { Injectable } from '@angular/core';
import { BOOKS } from './books';
import { IBooks } from './books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAllBooks (){
    return BOOKS;
  }
  
  addBook(addedBook : any) {
    BOOKS.push(addedBook);
  }
}
