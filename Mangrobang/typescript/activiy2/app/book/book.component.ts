import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() title: string;
  @Input() firstString: string;
  @Input() name: string;
  @Input() donatedBooks: any; 
  @Output() testString: EventEmitter<any> = new EventEmitter();
  childVariable: string[] = ['this','is', 'from','child component'];
  constructor() { }

  onButtonClick(book){
    let toBeEmitted = {
      author: book.author,
      title: book.title,
      childVariable: this.childVariable
    }
    this.testString.emit(toBeEmitted);
  }


  ngOnInit() {
  }

}
