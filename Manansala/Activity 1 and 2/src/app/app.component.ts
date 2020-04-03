import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity1';
  books;

  /**
   *
   */
  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }
}
