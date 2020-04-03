import { Component } from '@angular/core';
import { BooksService } from './books.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookies;
  id: number;
  title: string = '';
  author: string = '';
  available: boolean = false;
  image: string = '';

  constructor(private BookService: BooksService) {
    this.bookies = this.BookService.LoadBooks();
  }
  public AddInputBook() {
    if (this.title.trim() != ' ' && this.author.trim() != ' ') {
      this.id = this.bookies[this.bookies.length - 1].id + 1;
      this.BookService.AddBook({
        id: this.id,
        title: this.title,
        author: this.author,
        available: this.available,
        image: this.image
      });
    }
  }

  
}


