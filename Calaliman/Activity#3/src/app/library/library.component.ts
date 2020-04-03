import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input()  LibraryBooks: any;

  constructor() { }

  ReceiveTitle(Title){
    console.log(Title);
  }

  ngOnInit(): void {
  }

}
