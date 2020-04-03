import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  
  @Input() books;
  selected:string;
  printBook(receivedBook){
    this.selected = `Selected book: "${receivedBook.title}" by ${receivedBook.author}`;
  }
  ngOnInit(): void {
  }

}
