import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() books: object;
  bookObject

  constructor() {
    this.bookObject = {
      id: 0,
      title: "",
      author: "",
      available: "",
      image: ""
    }
  }

  AddToLibrary(book) {
    this.bookObject.id = book.id;
    this.bookObject.title = book.title;
    this.bookObject.author = book.author;
    this.bookObject.available = book.available == true ? "Available" : "Not Available";
    this.bookObject.image = book.image;
  }

  ngOnInit(): void {
  }
}
