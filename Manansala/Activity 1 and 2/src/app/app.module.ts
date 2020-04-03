import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RyanComponent } from './ryan/ryan.component';
import { BooksComponent } from './books/books.component';
import { LibraryComponent } from './library/library.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    RyanComponent,
    BooksComponent,
    LibraryComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
