/* eslint-disable import/prefer-default-export */

export const apiFetch = function(path, opts) {
	// const urlPrefix = 'http://localhost:9876';
	const urlPrefix = 'https://89fc7b0f.ngrok.io';
	const finalRoute = `${urlPrefix}/${path}`;

	return fetch(finalRoute, {
		...opts,
		// credentials: 'include',
	})
	.then((response)=> {
		if (!response.ok) {
			return response.json().then((err)=> { throw err; });
		}
		return response.json();
	});
};
