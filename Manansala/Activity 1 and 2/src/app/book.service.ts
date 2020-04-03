import { Injectable } from '@angular/core';
import {books} from './books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks() {
    return books;
  }
  public addBooks(newtitle, newauthor, newavailable, newimage){
    books.push({id: books.length+1, title: newtitle, author: newauthor, available: newavailable, image: newimage})
  }
}
