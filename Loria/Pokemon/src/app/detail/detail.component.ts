import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemonDetails: any;
  id: string;


  constructor(private route : ActivatedRoute, private pokemonService: PokemonService) {
    this.id = this.route.snapshot.paramMap.get('pokemonId')
    this.getPokemonsDetails(this.id);
   }

    getPokemonsDetails(id: string){
      this.pokemonService.getPokemons(id)
      .subscribe(poke => {
       this.pokemonDetails = poke 
      });
    }

  ngOnInit(): void {
  }

}
