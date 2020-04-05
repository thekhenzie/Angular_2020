import { Component, OnInit , Input, Output} from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() libraryBooks: any;
  @Input() bookTitle: any;

  selectedBookTitle: string;
  selectedBookAuthor: string;
  
  selectButtonClick(book){
    this.selectedBookTitle = book.title;
    this.selectedBookAuthor = book.author
  }




  ngOnInit(): void {
  }

}
