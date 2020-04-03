import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.css']
})
export class PokedetailsComponent implements OnInit {
  pokeId: any;
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokeId = this.route.snapshot.paramMap.get('id');
    this.getPokemonDetails(this.pokeId);
  }
  getPokemonDetails(id: string) {
    this.pokemonService.getPokemons(id)
      .subscribe(poke => { this.pokemon = poke });
  }

  ngOnInit(): void {
  }

}
