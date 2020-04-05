import { Component } from '@angular/core';
import { BookService } from  './book.service';
import { IBook } from './mock/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageTitle = 'Dharyll Jan T. Calaliman';
  books: any;
  bookTitle;
  bookAuthor;
  bookAvailable;
  imageSrc;
  addedBooks:IBook;

  constructor(private bookService: BookService){ }

  onLoadBooks(){
    this.books = this.bookService.getAllBooks();
  }

  onDeleteLastBook(){
    this.books = this.bookService.deleteLastBook();
  }

  onAddBook(){
    this.addedBooks = {id: this.bookService.getBookLength() + 1, title: this.bookTitle, author: this.bookAuthor, available: this.bookAvailable, image: this.imageSrc};
    this.books = this.bookService.addBook(this.addedBooks);
    
    this.bookTitle = "";
    this.bookAuthor = "";
    this.bookAvailable = "";
    this.imageSrc = "";
  }
}
