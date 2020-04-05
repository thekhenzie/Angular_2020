import { Injectable } from '@angular/core';
import { Books } from './mock/books';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }

  getAllBooks(){
    return Books;
  }
  
  deleteLastBook(){
    Books.pop();
    return Books;
  }

  addBook(books){
    Books.push(books);
    return Books;
  }

  getBookLength(){
    return Books.length;
  }
}
