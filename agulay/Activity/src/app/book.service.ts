//generated from terminal `ng g s [name]`
import {BOOKS} from './mock/books'
import { Injectable } from '@angular/core';

@Injectable({ //-convert the class/ service to be injectable
  providedIn: 'root' 
})
export class BookService {

  constructor() { }

  getBooks(){
    return BOOKS;
  }

  delLastBook(){
    return BOOKS.pop();
  }
  
  addBook(nTitle, nAuthor, nAvailable, nIimgURL){
    if(nTitle && nAuthor){
      let object 
      if(nAvailable == true || nAvailable== false){
      object = {id: (BOOKS.length + 1) , title: nTitle, author: nAuthor, available: nAvailable, image: nIimgURL};
      
      }  
      else{
        nAvailable = false;
        object = {id: (BOOKS.length + 1) , title: nTitle, author: nAuthor, available: nAvailable, image: nIimgURL};
      
      }
      BOOKS.push(object);
}
else{
  alert("Fill in Title and Author");
}
    
    return BOOKS;
  }
  
}


