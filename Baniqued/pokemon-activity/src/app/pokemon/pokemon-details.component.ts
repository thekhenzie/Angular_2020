import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  id: string;
  constructor(private route : ActivatedRoute) { 
    this.id = this.route.snapshot.paramMap.get('pokemonId');
  }

  ngOnInit() {
  }

}
