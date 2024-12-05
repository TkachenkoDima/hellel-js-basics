import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('The Dark Tower', 'Stephen King', 1982);
const book2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954);
const book3 = new Book('Dune', 'Frank Herbert', 1965);
const ebook1 = new EBook('Wheel of time', 'Robert Jordan', 1234, 'PDF');

const books = [book1, book2, book3, ebook1];

const oldestBook = Book.findOldestBook(books);
oldestBook.printInfo();
