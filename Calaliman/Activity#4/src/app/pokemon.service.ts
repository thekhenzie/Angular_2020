import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemon(pokeIndex): Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+ pokeIndex + '/')
    .pipe(catchError(this.handlError));
  }

  handlError(err : HttpErrorResponse){
    return throwError(err);
  }
}
