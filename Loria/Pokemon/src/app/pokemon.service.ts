import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemons(id) : Observable<any>{
    let apiLink = 'https://pokeapi.co/api/v2/pokemon/' + id;
    return this.http.get(apiLink)
    .pipe(catchError(this.handleError))
  
  }

  handleError(err: HttpErrorResponse){
    console.log(err);
    return throwError(err);
  }
}
