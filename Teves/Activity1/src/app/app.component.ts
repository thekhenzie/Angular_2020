import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string="Kath";
  listOfBooks = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, image: 'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg' },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
    { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true }
  ];

  PrintString(toBeReceived) {
    console.log(toBeReceived);
  }

}

