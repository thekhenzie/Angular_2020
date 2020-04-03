import { Component } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
 

  title = '';
  pokemon= new Array;
  pokemonArr = new Array;
  spriteArr  = new Array;
  

  constructor(
    private PokemonService: PokemonService) {
    //  this.PokemonService.getPokemons;
    this.getPokemons(20);
  }

  // getPokemons(num: number) {
  //   for (let i = 1; i <= num; i++) {
  //     this.pokemonService.getPokemon(i).subscribe(poke => {
  //       let newPokemon = {id: this.pokemons.length + 1, name: poke.name, image: poke.sprites.front_default };
  //       this.pokemons.push(newPokemon);
  //     })
  //   }
  // }

  getPokemons(num:number) {
    for ( let i = 1; i <= 20; i++){
    this.PokemonService.getPokemons(i)
      .subscribe(pokemon => {
       console.log(pokemon.name);
        this.pokemonArr.push(pokemon.name);
        this.spriteArr.push(pokemon.sprites.front_default);
      });
     
    }
  }
  
    
      
}
