import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name: string = "Ryan Shawn Manansala"
  url: string = 'https://images.unsplash.com/photo-1527554677374-236d3bc88a34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  @Input() books: any;
  @Output() eventEmitter = new EventEmitter<any>();

  newtitle;
  newauthor;
  newavailable;
  newimage;
  
  constructor(private bookService: BookService) { }

  BookSelected(book){
    let toBeEmitted = {
      author: book.author,
      title: book.title
    }
    this.eventEmitter.emit(toBeEmitted);
    console.log("bookselected")
    console.log(book)
  }

  AddBook(newtitle, newauthor, newavailable, newimage){
    this.bookService.addBooks(newtitle, newauthor, newavailable, newimage);
    console.log(newtitle+newauthor+newavailable+newimage);
  }
  ngOnInit(): void {
  }

}
