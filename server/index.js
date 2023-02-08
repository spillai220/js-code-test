const express = require('express');
const xml2js = require('xml2js');

const data = require('./books.json');

const app = express();
const port = 3000;

app.get('/books', (req, res) => {
  res.json(data);
});

app.get('/by-author', (req, res) => {
	const queriedAuthor = req.query.q;
	const queriedLimit = req.query.limit && parseInt(req.query.limit);
	const queriedFormat = req.query.format;

	let result = data
	if(queriedAuthor) {
		 result = data.books.filter(item => {
			const author = item.book.author.toLowerCase();

			return author.includes(queriedAuthor.toLowerCase())
		});
	}

 	if(queriedLimit) {
		result = result.slice(0, queriedLimit)
	}
	if(queriedFormat && queriedFormat === 'xml') {
		const builder = new xml2js.Builder({
			rootName: "row"
		});		
		const xml = builder.buildObject(result)
		res.set('Content-Type', 'application/xml');
		res.send(xml);
	} else {
		res.json(result);
	}  
});

app.listen(port, () => {
	console.log(`Node server running at port ${port}...`);
});