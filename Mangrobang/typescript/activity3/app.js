"use strict";
exports.__esModule = true;
var util_1 = require("./util");
var util_2 = require("./util");
var Ifunctype_1 = require("./Ifunctype");
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: util_1.Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: util_1.Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: util_1.Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: util_1.Category.Software }
];
var purgedBooks = util_2.Purge(inventory);
purgedBooks.forEach(function (book) { return console.log(book.title); });
var purgedNums = util_2.Purge([1, 2, 3, 4]);
console.log(purgedNums);
// let numberShelf: Shelf<number> = new Shelf<number>();
//  [1,2,3,4].forEach(num => numberShelf.add(num));
var bookShelf = new Ifunctype_1["default"]();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var softwareBook = bookShelf.find('Code Complete');
console.log(softwareBook.title + " - " + softwareBook.author);
