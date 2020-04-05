import { Category } from './util';

interface ShelfItem {
    title: string;
}


interface Magazine {
    title: string;
    publisher: string;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
   
}
export { ShelfItem, Book };