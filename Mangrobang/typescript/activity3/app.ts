import { Category } from './util';

import { Purge } from './util';
import  Shelf  from './Ifunctype';
import { ShelfItem, Book }from './interface';

let inventory: Array<Book> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

let purgedBooks: Array<Book> = Purge<Book>(inventory);
 
 purgedBooks.forEach(book => console.log(book.title));
 
 let purgedNums: Array<number> = Purge<number>([1, 2, 3, 4]);
 
console.log(purgedNums);


// let numberShelf: Shelf<number> = new Shelf<number>();
//  [1,2,3,4].forEach(num => numberShelf.add(num));
let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} - ${softwareBook.author}`);