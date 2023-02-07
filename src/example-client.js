const BookSearchApiClient = require("./BookSearchApiClient.js");

const client = BookSearchApiClient();
const booksByShakespear = client.getBooksByAuthor("Shakespear", 10);
console.log('[TEST] booksByShakespear', booksByShakespear)