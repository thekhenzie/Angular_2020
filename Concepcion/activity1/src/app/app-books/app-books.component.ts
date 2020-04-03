import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './app-books.component.html',
  styleUrls: ['./app-books.component.css']
})
export class AppBooksComponent implements OnInit {
  books:object[] = []
  constructor() { 
    this.books = [
      { id: 1, title: 'Ulysses', author: 'James Joyce', available: true },
      { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
      { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
      { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true },
      { id: 5, title: 'A Game of Thrones', author: 'George RR Martin', available: false }
    ];

  }

  ngOnInit(): void {
  }

}
