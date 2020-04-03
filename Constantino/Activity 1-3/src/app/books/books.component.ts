import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  @Input() books;
  selectedBook:any;
  @Output() clickBook: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onBtnClick(selectedBook) {
    this.clickBook.emit(selectedBook);
    this.selectedBook = selectedBook;
  }

}
