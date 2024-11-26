export class Book {
  constructor(title, author, year) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setYear(year);
  }

  printInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    if (typeof title !== "string" || title === null || title === "") {
      throw new Error("Title must be a string and not empty");
    }
    this.title = title;
  }

  getAuthor() {
    return this.author;
  }

  setAuthor(author) {
    if (typeof author !== "string" || author === null || author === "") {
      throw new Error("Author must be a string and not empty");
    }
    this.author = author;
  }

  getYear() {
    return this.year;
  }

  setYear(year) {
    if (typeof year !== "number" || year === null || year === "") {
      throw new Error("Year must be a number and not empty");
    }
    this.year = year;
  }

  static findOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.getYear() < oldest.getYear() ? current : oldest);
  }
}
