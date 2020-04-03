import { Injectable } from '@angular/core';
import { BOOKS } from './mock/mock-books';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url : string = "https://pokeapi.co/api/v2/";
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(this.url + 'pokemon/ditto/').pipe(catchError(this.errorHandler))
  }

  getAllBooks() : IBook[]{
    return BOOKS;
  }

  deleteBook(index: number) : void{
    BOOKS.splice((index-1), 1);
  }

  addBook(newBook : IBook) : void{
    BOOKS.push(newBook);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Something went wrong!")
  }
}

