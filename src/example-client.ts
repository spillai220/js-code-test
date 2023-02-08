import BookSearchApiClient from "./api/BookSearchApiClient";

const client = new BookSearchApiClient('json');
client.getBooksByAuthor("Shakespear", 10)
	.then(books => console.log("Books =>", books))
	.catch(err => console.log(err))