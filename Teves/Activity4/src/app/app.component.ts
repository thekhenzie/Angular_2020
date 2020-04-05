import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon: any[] = new Array();;
  title: string = " 20 Pokemons ";

  constructor(private pokemonService: PokemonService) {
    this.GetPokemons();
  }

  GetPokemons() {
    for (let i = 0; i < 20; i++) {
      this.pokemonService.GetPokemons()[i].subscribe(data =>
        this.pokemon[i] = data
      )
    }
  }
}
