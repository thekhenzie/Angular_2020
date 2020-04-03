import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  @Input() books:any;
  @Output() bookTitle: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onButtonClick(Title, Author){
    this.bookTitle.emit(Title + ' by ' + Author);
  }

  ngOnInit(): void {
  }

}
