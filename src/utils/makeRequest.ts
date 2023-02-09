import fetch from 'isomorphic-fetch';

export const makeRequest = (url: string, method = 'GET') => {
	return fetch(url, { method } )
		.then((response : Response) => {
			const contentType = response.headers.get('content-type');
			if (response.ok) {
				//NOTE: Need to add xml parsing support
				return contentType?.includes("application/json") ? response.json() : response.text();

			} else {
				return {
					status: response.status,
					statusText: `Request failed. Returned status of ${response.status}`
				}
			}
		})
		.catch(err => {
			return err;
		
		});
}