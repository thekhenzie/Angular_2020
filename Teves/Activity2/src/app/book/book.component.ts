import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() booksB: any;
  @Output() selectedBook: EventEmitter<any> = new EventEmitter();

  onButtonClick(book) {
    let toPrint = {
      author: book.author,
      title: book.title,
    }
    this.selectedBook.emit(toPrint);
  }

  constructor() { }
  ngOnInit(): void {
  }

}
