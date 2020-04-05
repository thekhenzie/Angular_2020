import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Welcome to my Library!"
  books = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpSzjDqf0JgQpl4M_3pAc9oXC9gEkhmyWjU5jaNpza8LKjU4Vf' },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, image: 'https://www.wrbh.org/wp-content/uploads/2018/07/Farewell-to-Arms.jpg' },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, image: 'https://www.gannett-cdn.com/presto/2018/11/01/PCLA/7320e9fb-6101-4d69-98c3-4c0197b869ca-COVERbFINAL.jpg?width=534&height=712&fit=bounds&auto=webp' }
  ];
}
