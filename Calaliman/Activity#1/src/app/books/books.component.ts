import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  
books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true }
];

constructor(){}

ngOnInit(){
}

}
