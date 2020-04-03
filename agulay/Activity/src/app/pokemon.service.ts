import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
   
   return this.http.get('https://pokeapi.co/api/v2/pokemon/1/')
    .pipe(catchError(this.handlerError));
  }

  handlerError(err :HttpErrorResponse){
    console.log(err);
    return throwError(err);
  }

}
