import { Book } from './Book.js';

export class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this.setFileFormat(fileFormat);
	}

	printInfo() {
		console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`);
	}

	getFormat() {
		return this.fileFormat;
	}

	setFileFormat(fileFormat) {
		if (typeof fileFormat !== 'string' || fileFormat === null || fileFormat === '')
			throw new Error('Format must be a string and not empty');

		this.fileFormat = fileFormat;
	}
}
