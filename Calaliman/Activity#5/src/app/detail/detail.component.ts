import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: any;
  monster:Array<Observable<any>>;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPokemon(this.id);
   }

  getPokemon(monsterCount){
    this.monster = new Array;
      this.pokemonService.getPokemon(monsterCount)
      .subscribe(data =>{
        this.monster.push(data);
      });
  }

  ngOnInit(): void {
  }

}
