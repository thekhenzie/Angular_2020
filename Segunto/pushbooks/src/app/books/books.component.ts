import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor() {}

  @Input() bookies: object;
  @Output() addToLibrary = new EventEmitter();

  // onClick(book) {
  //   this.addToLibrary.emit(book);
  // }

  ngOnInit(): void {}
}
