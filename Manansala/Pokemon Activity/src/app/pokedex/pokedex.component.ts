import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemons: Object[] = new Array();

  constructor(private pokemonService: PokemonService, private router: Router){ 
     for (let i = 1; i < 21; i++) {
      this.getPokemons(i);
      
    }
  }

  getPokemons(pokemonNumber){
    this.pokemonService.getPokemons(pokemonNumber)
    .subscribe(data => { 
      this.pokemons.push(data);
      console.log(data)
    });
  }
  redirectToPokemon(game_index){
    this.router.navigate(['/pokemon/'+game_index]);
  }
  ngOnInit(): void {
  }

}
