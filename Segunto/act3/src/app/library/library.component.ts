import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() bookies: object;
  bookiesOb;
  constructor() {
    this.bookiesOb = { id: 0, title: '', author: '', available: '', image: '' };
  }

  AddToLibrary(book) {
    this.bookiesOb.id = book.id;
    this.bookiesOb.title = book.title;
    this.bookiesOb.author = book.author;
    this.bookiesOb.available == true ? 'Available' : 'Not Available';
    this.bookiesOb.image = book.image;
  }

  ngOnInit(): void {}
}
