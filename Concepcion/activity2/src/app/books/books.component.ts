import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() books:object;
  @Output() addToLibrary= new EventEmitter();

  onClick(book) {
    this.addToLibrary.emit(book);
  }
  ngOnInit(): void {
  }

}
