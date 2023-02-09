import BookSearchApiClient from './api/BookSearchApiClient';
import { Book } from './interface/Book';
const client = new BookSearchApiClient('json');

const printBooks = (books: Book[] | undefined) => {
	if(Array.isArray(books)) {
		console.log(`Books by ${books[0].author}:`, books);
	} else {
		console.log('No books were found!');

	}
}

client.getBooksByAuthor('Shakespear', 4)
	.then(printBooks)
	.catch(err => console.log(err)); 

	client.getBooksByAuthor('Dumas', 4)
	.then(printBooks)
	.catch(err => console.log(err))