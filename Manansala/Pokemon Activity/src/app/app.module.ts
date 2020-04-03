import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [
  { path: '', component: PokedexComponent},
  { path: 'pokedex', component: PokedexComponent},
  { path: 'pokemon/:pokemonId', component: PokemonDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
