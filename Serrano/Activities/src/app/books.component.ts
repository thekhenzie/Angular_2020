import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
  //   templateUrl: './app.component.html',
  //   styleUrls: ['./app.component.css']
})
export class BookComponent {
  @Input() books : any;
  @Output() clickedBook: EventEmitter<any> = new EventEmitter();

  constructor () {}

  selectBook(book) {
    let clickedBook = {
      id : book.id,
      author: book.author,
      title: book.title,
      available : book.available
    }
    this.clickedBook.emit(clickedBook);
  }
  
}




