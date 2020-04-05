import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() books: any;
  @Output() selectedBook: EventEmitter<any> = new EventEmitter();
  selectedImage: any;
    
  selectButtonClick(book){
    this.selectedImage = book.image;
    this.selectedBook.emit(book);  
  } 

  ngOnInit() {

  }

}
