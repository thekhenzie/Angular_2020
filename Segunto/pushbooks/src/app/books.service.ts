import { Injectable } from '@angular/core';
import {bookies} from '../mock/book';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  LoadBooks() {
    return bookies;
  }
  
  AddBook(book){
    bookies.push(book);
  }

  DeleteBook(book){
    bookies.pop();
  }
}
