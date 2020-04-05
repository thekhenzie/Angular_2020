import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() books: object;
  @Output() addToLibrary = new EventEmitter();
  id: number = 0;
  title: string = "";
  author: string = "";
  available: boolean = false;
  image: string = "";
  constructor(private BookService: BookService) {
  }

  ShowBook(book) {
    this.addToLibrary.emit(book);
  }
  UpdateBook(book): void {
    this.id = book.id;
    this.title = book.title;
    this.author = book.author;
    this.available = book.available;
    this.image = book.image;
  }
  UpdateSelectedBook(): void {
    let NewBook = { id: this.id, title: this.title, author: this.author, available: this.available, image: this.image };
    this.BookService.UpdateBook(NewBook)
  }
  ngOnInit(): void {
  }

}
