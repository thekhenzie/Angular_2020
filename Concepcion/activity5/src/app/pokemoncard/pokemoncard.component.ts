import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.css']
})
export class PokemoncardComponent implements OnInit {
  chosenPokemon:any;
  constructor(private pokemonservice: PokemonService, private route: ActivatedRoute) {
    this.GetPokemon(route.snapshot.paramMap.get('id'))
  }
  GetPokemon(id): void {
      this.pokemonservice.GetPokemon(id).subscribe(p => this.chosenPokemon=p);
    }
  ngOnInit(): void {
  }

}
