import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: any[] = new Array();

  constructor(private pokemonService: PokemonService){
    this.getPokemons();
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  getPokemons(){
    for(let i = 1; i<=20; i++){
      this.pokemonService.getPokemon(i)
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
