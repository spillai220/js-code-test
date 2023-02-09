import { makeRequest } from '../utils/makeRequest';
import { makeXHRequest } from '../utils/makeXHRequest';
import { BookAdapter } from '../adapters/BookAdapter';
import { Book } from '../interface/Book';

const FORMAT = {
  JSON: 'json',
  XML: 'xml'
}
export default class BookSearchApiClient {
  private format;
  private API_URL = 'http://localhost:3000'; 
  //private API_URL = 'http://api.book-seller-example.com'; 
  
  constructor(format : string) {
    this.format = format;
  }

   private parseJSON = (response: any) => {
    return response.map(BookAdapter.parseJSON);
   }

   private parseXML = (response: XMLDocument) => {
    const items = Array.from(response.documentElement.children) as any[];
    const result = items.map(BookAdapter.parseXML)

    return result;
   }

   public getBooksByAuthor = async (authorName: string, limit: number) : Promise<Book[] | undefined> => {
    const url = `${this.API_URL}/by-author?q=${authorName}&limit=${limit}&format=${this.format}`;

    const sendRequest = this.format === FORMAT.JSON ? makeRequest : makeXHRequest;
    
    try {
      const response = await sendRequest(url);
      if (this.format === FORMAT.JSON) {
        return this.parseJSON(response);

      } else if (this.format === FORMAT.XML) {
        return this.parseXML(response);

      }

    } catch (err : any) {
      return err.statusText
    }

  }
}