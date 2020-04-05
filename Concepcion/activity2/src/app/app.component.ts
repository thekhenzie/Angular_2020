import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  books: object[];
  constructor() {
    this.title="Jayson Concepcion";
    this.books = [
      { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, image: "https://bit.ly/3dIJBv6" },
      { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, image: "https://bit.ly/2xB9HPV" },
      { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, image: "https://bit.ly/3dFgV6d" },
      { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, image: "https://bit.ly/2xz394u" },
      { id: 5, title: 'A Game of Thrones', author: 'George RR Martin', available: false, image: "https://bit.ly/2QZe3ah" }
    ];
  }
}
