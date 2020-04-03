import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError} from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(httpApi){
 
    return this.http.get(httpApi)
    .pipe(catchError(this.handlerError));
  }

  getSinglePokemon(id){
    let link : string = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return this.http.get(link).pipe(catchError(this.handlerError));;    
  }

  handlerError(err :HttpErrorResponse){
    console.log(err);
    return throwError(err);
  }
}
