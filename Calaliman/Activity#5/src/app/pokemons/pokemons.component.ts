import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  listOfMonster: Array<Observable<any>>;
  
  constructor(private pokemonService: PokemonService) {
    this.getPokemon(20);
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

  ngOnInit(): void {
  }

}
