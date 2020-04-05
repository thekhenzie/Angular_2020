import { Injectable } from '@angular/core';
import { BOOKS } from './mock/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks(){
    return BOOKS
  }

  deleteBook(){
    return BOOKS.pop();
  }
}
