import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { LibraryComponent } from './library/library.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    LibraryComponent,
    ImageComponent,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
