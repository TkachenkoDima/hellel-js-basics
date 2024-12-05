// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
	title: 'The Gunslinger',
	author: 'Stephen King',
	year: 1982,
};

const { title, author } = book;

let myBook = { title, author };

console.log(myBook);
