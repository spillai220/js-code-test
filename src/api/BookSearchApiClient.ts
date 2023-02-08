import { makeRequest } from '../utils/makeRequest';
import { BookAdapter } from '../adapters/BookAdapter';
import { Book } from '../interface/Book';

const FORMAT = {
  JSON: 'json',
  XML: 'xml'
}
export default class BookSearchApiClient {
  private format;
  private API_URL = 'http://api.book-seller-example.com'; 
  
  constructor(format : string) {
    this.format = format;
  }

   private parseJSON = (responseText: string) => {
    const json = JSON.parse(responseText);
    const result = json.map(BookAdapter.parseJSON);

    return result
   }

   private parseXML = (responseXML: XMLDocument) => {
    const items = Array.from(responseXML.documentElement.children) as any[];
    const result = items.map(BookAdapter.parseXML)

    return result;
   }

   getBooksByAuthor = async (authorName: string, limit: number) : Promise<Book[] | undefined> => {
    const url = `${this.API_URL}/by-author?q=${authorName}&limit=${limit}&format=${this.format}`;
    try {
      const response = await makeRequest(url);

      if (this.format === FORMAT.JSON) {
        return this.parseJSON(response.responseText);

      } else if (this.format === FORMAT.XML) {
        return this.parseXML(response.responseXML);

      }

    } catch (err : any) {
      return err.statusText
    }

  }
}