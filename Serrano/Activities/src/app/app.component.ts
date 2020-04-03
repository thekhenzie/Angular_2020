import { Component} from '@angular/core';
import { BooksService } from './books.service';
import { IBooks } from './books.interface';

@Component({
  selector: 'app-root',
  // template:
  // `<h1>Hi {{title}}</h1>
  // <div><app-books></app-books></div>`
  templateUrl: './app.component.html',
})
export class AppComponent {
  title : string = "";
  author : string = "";
  available : boolean;
  image : string;
  books : any;
  constructor(private bookService : BooksService ){
    this.books = this.bookService.getAllBooks();
  }
  
 
  addNewBook(){
    if (this.title == "" || this.author == "" || this.title == null || this.author == null || (this.title=="" && this.author=="")){
      alert("Please fill out the Title and Author");
    }
    else {
      let newBook = {
        id : this.books.length + 1,
        title : this.title,
        author : this.author,
        available : this.available,
        image : this.image
      }
      
      this.bookService.addBook(newBook);
      console.log("Book is Added");

    }
    
    
  }

}
