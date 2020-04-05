import { Component, OnInit, Input } from '@angular/core';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageBook:any;
  constructor() { }
  ngOnInit(): void {
  }

}
