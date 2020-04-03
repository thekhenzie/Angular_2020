import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @Input() books : any;

  constructor() { }

  displaySelected(selectedBook){
    console.log(selectedBook.title + " by " + selectedBook.author);
  }

  ngOnInit(): void {
  }

}
