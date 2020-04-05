import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemons(pokeNum) : Observable<any> {
    let link = 'https://pokeapi.co/api/v2/pokemon/' + pokeNum;
    console.log(link);
    return this.http.get(link).pipe(catchError(this.handleError));
  }

  handleError(err : HttpErrorResponse){
    return throwError(err);
  }
}
