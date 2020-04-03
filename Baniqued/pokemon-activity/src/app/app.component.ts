import { Component } from '@angular/core';
import { BookService } from './book.service';
import { PokemonService } from './pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  //template: '<h1>Hello World, {{title}}!</h1>'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcomeTitle = 'Welcome to my Bookstore!';
  bookString: string = 'Here are the list of books';
  name: string= 'Khen';
  listOfBooks : IBook[] = [];
  deletedBook : IBook;
  selectedBook : string = "";

  title: string = "";
  author: string = "";
  available: boolean = true;
  image : string;

  pokemons: any;

  constructor(private bookService: BookService,
    private pokemonService: PokemonService,
    private router: Router) { 
    this.getAllBooks();
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonService.getPokemons()
    .subscribe(data => { 
      this.pokemons = data.results;
    });
  }

  getAllBooks() {
    this.listOfBooks = this.bookService.getAllBooks();
  }

  redirectToPokemon(){
    this.router.navigate(['/pokemons']);
  }
  deleteLastBook(index){
    this.bookService.deleteBook(index);
  }

  addBook(){
    let newBook: IBook = {
      id : this.listOfBooks.length + 1,
      title : this.title,
      author : this.author,
      available : this.available,
      image : this.image
    }
    if(newBook.title.trim() == '' || newBook.author.trim() == ''){
      alert("Title and author is required");
    }
    else{
      this.bookService.addBook(newBook);
      this.clear();
    }
  }
  
  deleteBook(index){
    this.bookService.deleteBook(index);
  }

  clear(){
    this.title = "";
    this.author = "";
    this.available = true;
    this.image = ""; 
  }

  printString(book){
    this.selectedBook = `${book.title} by ${book.author}`;
  }
}
