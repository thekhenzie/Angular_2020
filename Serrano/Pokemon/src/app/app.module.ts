import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes = [
  { path: 'pokemons', component: PokemonComponent},
  { path: 'pokemons/:id', component: PokemondetailsComponent},
  { path: '', redirectTo:'pokemons', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( routes , {useHash: true})  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
