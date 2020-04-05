import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() parentInput: any;
  @Input() title: string = "gg";
  @Input() name: string;
  @Output() testString: EventEmitter<string> = new EventEmitter();
  
  @Input() image: string =
    'https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg';
  
    onButtonClick(Title,Author){
      this.testString.emit(Title + " by " + Author)
      }
      
    }
  

     
