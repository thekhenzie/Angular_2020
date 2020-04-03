import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemondisplay',
  templateUrl: './pokemondisplay.component.html',
  styleUrls: ['./pokemondisplay.component.css']
})

export class PokemondisplayComponent {

  pokemon: any[] = new Array();

  constructor(private pokemonService: PokemonService){
    this.getPokemons();
  }

  getPokemons(){
    for(let i = 1; i<=20; i++){
      this.pokemonService.getPokemons(i)
      .subscribe(poke => {
        let newPoke = {
          id: poke.id,
          name: poke.name,
          sprite: poke.sprites.front_default
        };
        this.pokemon.push(newPoke);
      });
    }
 
    
  }

}
