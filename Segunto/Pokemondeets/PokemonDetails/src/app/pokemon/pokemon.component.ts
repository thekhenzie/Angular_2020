import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonArr : any[] = [];

  constructor(private pokemonService: PokemonService) { 
    this.getPokemon();
  }

  getPokemon() {
    
    for (let i = 1; i <= 20; i ++){
      this.pokemonService.getPokemons(i)
      .subscribe(poke => {
        console.log(poke.name);
        let newPokemon = { id : poke.id , name : poke.name, img : poke.sprites.front_default};
        this.pokemonArr.push(newPokemon);
      });
      
    }
  }

  ngOnInit(): void {
  }

}
