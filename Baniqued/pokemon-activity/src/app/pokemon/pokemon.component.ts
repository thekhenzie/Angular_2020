import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonList: any = [];
  constructor(private pokemonService: PokemonService) {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons()
      .subscribe(data => {
        this.pokemonList = data.results;
      });
  }

  ngOnInit() {
  }

}
