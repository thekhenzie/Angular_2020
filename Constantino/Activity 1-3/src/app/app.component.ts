import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {

books;
deletedbook;
constructor(private bookService: BookService){ }

getAllBooks(){
  this.books = this.bookService.getAllBooks();
}

deleteBook(){
  this.deletedbook = this.bookService.deleteBook();
}


}
