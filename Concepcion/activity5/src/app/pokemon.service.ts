import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Observer } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
    
   }

  GetPokemon(i:number):any{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${i}`).pipe(catchError(this.handleError));
  }
  handleError(err: HttpErrorResponse) {
    console.log(err)
    return throwError(err)
  }
}
