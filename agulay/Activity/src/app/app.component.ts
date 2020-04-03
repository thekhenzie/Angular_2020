import { Component } from '@angular/core';
import {BookService} from './book.service';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  header = "library books";
  listOfBooks;
  nTitle: any;
  nAuthor: any;
  nAvail: any = true;
  nImgURL: any;

  pokemon: any;

  constructor(private bookService: BookService,
     private pokemonService: PokemonService){
       this.getPokemons();
    
  }
  
getPokemons(){
  this.pokemonService.getPokemons().subscribe(
    poke => {
      this.pokemon = poke;
    });
}
  

  getAllBooks(){
    this.listOfBooks = this.bookService.getBooks();
  }

  delLastBook(){
    this.bookService.delLastBook();
  }

  addNewBook(){
        this.bookService.addBook(this.nTitle, this.nAuthor,this.nAvail, this.nImgURL);
        this.nTitle ="", this.nAuthor ="",this.nAvail = true,  this.nImgURL ="";
  }
  


}
