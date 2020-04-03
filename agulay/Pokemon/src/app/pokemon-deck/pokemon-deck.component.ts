import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../pokemon.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-deck',
  templateUrl: './pokemon-deck.component.html',
  styleUrls: ['./pokemon-deck.component.css']
})
export class PokemonDeckComponent implements OnInit {
  title = 'PokeDex';
  pokemonDeck = [];

  

  constructor(private pokeService: PokemonService,
              private router: Router) {
    this.getPokemons();
   }
 getPokemons(){

    for (let index = 0; index < 20; index++) {
      this.pokeService.getPokemons(`https://pokeapi.co/api/v2/pokemon/${index+1}/`).subscribe(
        poke => {
          const obj = {id: (index + 1),  ...poke};
          this.pokemonDeck[index] = obj;
        });
    }
    console.log(this.pokemonDeck);
  }

  redirectToDetails(pokemon){
    this.router.navigate([`/pokemon/${pokemon.id}`]);
  }

  ngOnInit(): void {
  }

}
