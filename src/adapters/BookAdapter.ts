import { Book } from "../interface/Book"; 

export class BookAdapter {
	static parseJSON(data: any) : Book {
		return {
			title: data.book.title,
			author: data.book.author,
			isbn: data.book.isbn,
			quantity: data.stock.quantity,
			price: data.stock.price,
		}
	}
	static parseXML(data: any) : Book {
		return {
			title: data.children[0].children[0].textContent,
			isbn: data.children[0].children[1].textContent,
			author: data.children[0]?.children[2]?.textContent,
			quantity: parseInt(data.children[1].children[0].textContent),
			price: data.children[1].children[1].textContent,
		}
	}
}
