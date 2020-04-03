import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
@Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}
