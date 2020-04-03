import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  pokemon: any[] = new Array();
  title: string = "Welcome to 20 Pokemons!";
  name: string;

  constructor(private pokemonService: PokemonService, private router: Router) {
    this.GetPokemons();
  }

  GetPokemons() {
    for (let i = 0; i < 20; i++) {
      this.pokemonService.GetPokemons()[i].subscribe(data =>
        this.pokemon[i] = data
      )
    }
  }

  redirectToPokemon() {
    this.router.navigate(['/desc']);
  }
}

