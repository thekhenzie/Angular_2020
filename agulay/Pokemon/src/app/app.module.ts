import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PokemonDeckComponent } from './pokemon-deck/pokemon-deck.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component'

const routes = [
  {path: 'pokemonDeck', component: PokemonDeckComponent},
  {path: 'pokemon/:id', component: PokemonDetailsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonDeckComponent,
    PageNotFoundComponent,
    HomeComponent,
    PokemonDetailsComponent
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
