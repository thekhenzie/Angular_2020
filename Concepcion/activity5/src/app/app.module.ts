import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo:'welcome',pathMatch:'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:id', component: PokemoncardComponent },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PokemoncardComponent,
    NotfoundComponent,
    WelcomeComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { useHash: true }
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
