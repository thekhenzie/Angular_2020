import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: any[] = new Array();

  constructor(private http: HttpClient) { }

  GetPokemons() {
    for (let i = 1; i <= 20; i++) {
      this.pokemons.push(this.http.get(`https://pokeapi.co/api/v2/pokemon-form/${i}/`))
      //.pipe(catchError(this.handleError)));
    }
    return this.pokemons;
  }

  handleError(err) {
    return throwError(err);
  }
}
