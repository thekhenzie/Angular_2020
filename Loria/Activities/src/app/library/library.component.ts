import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
@Input() libBooks: any;
  constructor() { }

  ngOnInit(): void {
  }

  printString(book){
    console.log(`Selected book: ${book.title} by ${book.author}`);
  }

}
