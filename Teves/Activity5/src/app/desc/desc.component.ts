import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent {
  getPoke: any[] = new Array();

  constructor(private pokemonService: PokemonService) {
    this.GetPokemons();
  }

  GetPokemons() {
    for (let i = 0; i < 20; i++) {
      this.pokemonService.GetPokemons()[i].subscribe(data =>
        this.getPoke[i] = data
      )
    }
  }

}
