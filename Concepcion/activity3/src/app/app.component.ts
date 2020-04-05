import { Component } from '@angular/core';
import { BookService } from './books.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books;
  id: number;
  title: string = "";
  author: string = "";
  available: boolean = false;
  image: string = "";

  //bookAdd = {id:0,title:"",author:"",available:false,image:""}
  constructor(private BookService: BookService) {
    this.books = this.BookService.LoadBooks();
  }
  public AddInputBook() {
    if (this.title.trim() != "" && this.author.trim() != "") {
      this.id = this.books[this.books.length - 1].id + 1;
      this.BookService.AddBook({ id: this.id, title: this.title, author: this.author, available: this.available, image: this.image });
    }
    else {
      alert("Title and Author is required!")
    }
  }
  DeleteLastBook() {
    this.BookService.DeleteLastBook();
}
}
