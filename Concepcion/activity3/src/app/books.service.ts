import { Injectable } from '@angular/core';
import { books } from '../mock/book'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  LoadBooks() {
    return books;
  }

  AddBook(book): void {
    books.push(book);
  }
  DeleteLastBook(): void {
    books.pop();
  }
  UpdateBook(NewBook): void {
    books[NewBook.id - 1] = NewBook;
    alert("Book was Updated!")
  }

}
