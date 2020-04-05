import { Component , Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

title = "Bryon Kurt S. Segunto";
bookString: string = 'Here are the list of books';
name: string= 'Khen';
bookies = [
  { id: 1, title: 'Ulysses', author: 'James Joyce', available: true } ,
  { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
  { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true }
];

printString(toBeReceived){
  console.log(toBeReceived);
}
}
