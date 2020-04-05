import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  listofPokemons: Array<Observable<any>> = [];
  pokeId: string;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.pokeId = this.route.snapshot.paramMap.get('id')  
    this.getPokemons(this.pokeId); 

  }
  getPokemons(nums){
    this.listofPokemons = new Array;{
      this.pokemonService.getPokemons(nums)
      .subscribe(data => {
       this.listofPokemons.push(data);
      });
    }
  }
  

  ngOnInit(): void {
  }

}
