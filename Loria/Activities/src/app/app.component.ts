import { Component,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BookService } from './book.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title1 = 'Activity1';
title: string;
author: string;
available: boolean;
image: string;

constructor(private bookService: BookService){

}
listOfBooks = this.bookService.getBooks();
addBook(){
  if(this.title == "" || this.author == "" || this.title == null || this.author == null || (this.title == "" && this.author=="")){
    alert("Title and Author must be filled out");
  }
  else{
  let newBooks = {
    id: this.listOfBooks.length + 1,
    title: this.title,
    author: this.author,
    available: this.available,
    image: this.image

  }
  this.bookService.addBook(newBooks);
}
}
}
