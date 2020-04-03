import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemondisplayComponent } from './pokemondisplay/pokemondisplay.component';

const routes = [
  {path: 'pokemondisplay', component: PokemondisplayComponent},
  {path: 'pokemondetails/:pokemonId', component: DetailComponent},
  {path: '', redirectTo:'pokemondisplay', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PokemondisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
