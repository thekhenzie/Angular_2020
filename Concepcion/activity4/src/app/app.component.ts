import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemonz';
  pokemonList: any[] = new Array();
  pokemon: any;

  constructor(private PokemonService: PokemonService) {
    this.Get20Pokemons();
  }

  Get20Pokemons(): void {
    for (let i = 0; i < 20; i++) {
      this.PokemonService.GetFirst20Pokemons()[i].subscribe(data =>
        this.pokemonList[i] = data
      )
    }

  }
}
