import BookSearchApiClient from '../api/BookSearchApiClient'
import { mockJSONData, mockXMLResponseString, mockParsedResponse } from '../__mocks__/mockResponse'
import * as makeRequest from '../utils/makeRequest';
import * as makeXHRequest from '../utils/makeXHRequest';

const parser = new DOMParser();
const mockXMLResponse = parser.parseFromString(mockXMLResponseString, 'application/xml');

const errorText = 'Request failed. Returned status of 404'

const successJSON = () => Promise.resolve(mockJSONData);

const successXML = () => Promise.resolve(mockXMLResponse);

const fail = () => Promise.reject({
	statusText: errorText
})

describe('BookSearchApiClient', () => {
	afterEach(() => {
		jest.clearAllMocks();
	})
	
	it('should parse and return results when format is "json"', async () => {
		const mockMakeRequest = jest.spyOn(makeRequest, 'makeRequest')
		mockMakeRequest.mockImplementation(successJSON)
		
		const client = new BookSearchApiClient('json');
		const result = await client.getBooksByAuthor('Shakespear', 10);
		
		expect(result).toEqual(mockParsedResponse)
	});

	it('should parse and return results when format is "xml"', async () => {
		const mockMakeRequest = jest.spyOn(makeXHRequest, 'makeXHRequest')
		mockMakeRequest.mockImplementation(successXML)

		const client = new BookSearchApiClient('xml');
		const result = await client.getBooksByAuthor('Shakespear', 10);

		expect(result).toEqual(mockParsedResponse);
	})

	it('should return error message on failed request', async () => {
		const mockMakeRequest = jest.spyOn(makeRequest, 'makeRequest')
		mockMakeRequest.mockImplementation(fail)

		const client = new BookSearchApiClient('json');
		const result = await client.getBooksByAuthor('Shakespear', 10);

		expect(result).toEqual(errorText);
	})
})