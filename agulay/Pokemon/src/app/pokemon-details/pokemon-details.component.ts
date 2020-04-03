import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  id: any;
  pokemon: any;


  constructor(private route: ActivatedRoute, private pokemonService : PokemonService) {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.GetPokeDetails();
   }

   GetPokeDetails(){
    this.pokemonService.getSinglePokemon(this.id).subscribe( pokemon => {this.pokemon = pokemon});
     
   }

  ngOnInit(): void {
  }

}
