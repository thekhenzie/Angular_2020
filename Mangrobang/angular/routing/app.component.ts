import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '20 First Pokemons!';
  pokemons: any[] = [];
  constructor(private pokemonService: PokemonService) {
    this.getPokemons(20);
  }
  getPokemons(num: number) {
    for (let i = 1; i <= num; i++) {
      this.pokemonService.getPokemons(i).subscribe(poke => {
        let newPokemon = {id: this.pokemons.length + 1, name: poke.name, image: poke.sprites.front_default };
        this.pokemons.push(newPokemon);
      })
    }
  }
}