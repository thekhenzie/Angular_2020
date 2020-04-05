import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes =[
{path: 'detail/:id', component: DetailComponent},
{path: 'pokemon', component: PokemonsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PokemonsComponent,
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
