import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() books: any;
  
  @Output() eventEmitter: EventEmitter<string> = new EventEmitter();

  selectedBook: any;
  isVisible: boolean = false;


  passBooks() {
    this.eventEmitter.emit(this.books);
  }

  GetBookSelected($event){
    this.selectedBook = $event;
    this.isVisible = true;
    console.log("recieved book: "+ $event)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
