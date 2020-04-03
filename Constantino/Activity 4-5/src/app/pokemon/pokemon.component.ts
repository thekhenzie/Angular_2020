import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  
  listofPokemons: Array<Observable<any>> = [];
  constructor(private pokemonService: PokemonService) {
   
    this.getPokemons(20);

   }

   getPokemons(nums){
    this.listofPokemons = new Array;
    for(let i = 1; i <= nums; i++){
      this.pokemonService.getPokemons(i)
      .subscribe(data => {
       this.listofPokemons.push(data);
      });
    }
  }

  ngOnInit(): void {
  }

}
