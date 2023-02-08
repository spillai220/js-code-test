import BookSearchApiClient from "../api/BookSearchApiClient"
import { mockJSONData, mockXMLResponseString, mockParsedResponse } from '../__mocks__/mockResponse'
import * as make from "../utils/makeRequest";
const parser = new DOMParser();
const mockXMLResponse = parser.parseFromString(mockXMLResponseString, "application/xml");

const errorText = 'Request failed. Returned status of 404'
const success = () => Promise.resolve({
	responseText: JSON.stringify(mockJSONData),
	responseXML: mockXMLResponse,
});
const fail = () => Promise.reject({
	statusText: errorText
})


describe('BookSearchApiClient', () => {
	it('should parse and return results when format is "json"', async () => {
		const mockMakeRequest = jest.spyOn(make, "makeRequest")
		mockMakeRequest.mockImplementation(success)
		
		const client = new BookSearchApiClient('json');
		const result = await client.getBooksByAuthor('Shakespear', 10);
		
		expect(result).toEqual(mockParsedResponse)
		jest.clearAllMocks();
	});

	it('should parse and return results when format is "xml"', async () => {
		const mockMakeRequest = jest.spyOn(make, "makeRequest")
		mockMakeRequest.mockImplementation(success)

		const client = new BookSearchApiClient('xml');
		const result = await client.getBooksByAuthor('Shakespear', 10);

		expect(result).toEqual(mockParsedResponse);
		jest.clearAllMocks();
	})

	it('should return error message on failed request', async () => {
		const mockMakeRequest = jest.spyOn(make, "makeRequest")
		mockMakeRequest.mockImplementation(fail)

		const client = new BookSearchApiClient('json');
		const result = await client.getBooksByAuthor('Shakespear', 10);

		expect(result).toEqual(errorText);
		jest.clearAllMocks();

	})
})