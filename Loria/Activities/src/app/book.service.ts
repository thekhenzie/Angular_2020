import { Injectable } from '@angular/core';
import { BOOKS } from './books'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(){
    return BOOKS;
  }

  addBook(newBooks: any){
    BOOKS.push(newBooks);
  }
}
