import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  @Input() donatedBooks: any;
  @Output() testString: EventEmitter<any> = new EventEmitter();

  onButtonClick(book) {
    let toBeEmitted = {
      author: book.author,
      title: book.title,
    }
    this.testString.emit(toBeEmitted);
  }


}