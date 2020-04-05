import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() parentInput: any;

  printString(toBeReceived){
    console.log(toBeReceived);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
