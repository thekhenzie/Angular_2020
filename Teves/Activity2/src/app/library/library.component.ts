import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  @Input() booksLib: any;

  PrintSelected(book) {
    console.log(`Selected book: ${book.title} by ${book.author}`);
  }

}
