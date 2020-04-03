import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) { }
  pokemonArray: Observable<any>[] = new Array();
  GetFirst20Pokemons(){
    for (let i = 1; i <= 20; i++) {
      this.pokemonArray.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).pipe(catchError(this.handleError)));
    }
    return this.pokemonArray;

  }
  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }
}
