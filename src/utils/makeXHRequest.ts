export const makeXHRequest = (url: string, method = 'GET') => {
	return new Promise<any>((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open(method, url);

		xhr.onload = () => {
			if(xhr.status === 200) {
				resolve(xhr)
			} else {
				const error = `Request failed. Returned status of ${xhr.status}`
				reject({
					status: xhr.status,
					statusText: error
				})
			}
		}
	});
};
