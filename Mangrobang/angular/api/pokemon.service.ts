import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  

  constructor(private http: HttpClient) { }
  getPokemons(num:number) : Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
       .pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse){
    console.log(err);
    return throwError(err);
  }
}
