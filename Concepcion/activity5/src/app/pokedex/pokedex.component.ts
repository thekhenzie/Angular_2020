import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  title = 'Pokemonz';
  pokemonList: any[] = new Array();
  pokemon: any;

  constructor(private PokemonService: PokemonService, private router: Router) {
    this.GetPokemons(20);
    this.pokemonList.sort();
  }


  GetPokemons(count: number): void {

    for (let i = 1; i <= count; i++) {
      this.PokemonService.GetPokemon(i).subscribe(p => this.pokemonList.push(p))
    }

  }
  CheckPokemon(id: number): void {
    this.router.navigate(['/pokedex/1']);
  }
  ngOnInit(): void {
  }

}
