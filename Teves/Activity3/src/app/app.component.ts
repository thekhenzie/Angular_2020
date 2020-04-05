import { Component , Input} from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome:string ="Add your books here!";
  title: string;
  author:string;
  available:boolean=true;
  image:string;
  listOfBooks:any;
 
  constructor(private bookService:BookService) {
    this.listOfBooks = this.bookService.getAllBooks();
   }
  
  addBook(){
    if(this.title &&this.author != null){
      let listOfBooks:any = { id:this.listOfBooks.length+1, 
        title:this.title, 
        author:this.author,
        available:this.available,
        image:this.image,
      }
      this.bookService.addBook(listOfBooks);
    }
    
    else{
      alert("Please enter a title and author");
  }
  }

  deleteBook(){
    this.bookService.deleteBook();
   }
}
