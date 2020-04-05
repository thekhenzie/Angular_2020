import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-books',
    templateUrl:
    './books.component.html'
})

export class BooksComponent{
@Output() testString: EventEmitter<any> = new EventEmitter();
@Input() books: any;
    onButtonClick(book){
        let toBeEmitted = {
          author: book.author,
          title: book.title,
        }
        this.testString.emit(toBeEmitted);
      }
}