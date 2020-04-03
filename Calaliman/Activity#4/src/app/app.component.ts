import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listOfMonster: Array<Observable<any>>;

  constructor(private pokemonService : PokemonService){
  }

  getPokemon(monsterCount){
    this.listOfMonster = new Array;
    for(let i = 1; i <= monsterCount; i++){
      this.pokemonService.getPokemon(i)
      .subscribe(data =>{
        this.listOfMonster.push(data);
      });
    }
  }
}
