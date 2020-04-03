import { Injectable } from '@angular/core';
import {Books} from './mock/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks(){
    return Books;
  }

  addBook(books:any){
    Books.push(books);
  }
  
  deleteBook(){
    return Books.pop();
  }

}

