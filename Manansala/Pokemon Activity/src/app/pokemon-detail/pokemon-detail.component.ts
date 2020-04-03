import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  id: string;
  pokemon: any;

  constructor(private pokemonService: PokemonService, private route : ActivatedRoute, private router: Router) { 
    this.id = this.route.snapshot.paramMap.get('pokemonId');
    
      this.getPokemons(this.id);
      
  }

  getPokemons(pokemonNumber){
    this.pokemonService.getPokemons(pokemonNumber)
    .subscribe(data => { 
      this.pokemon = data;
      console.log(data)
    });
  }
  ngOnInit(): void {
  }

}
