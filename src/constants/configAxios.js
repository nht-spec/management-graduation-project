import { API_KEYS } from './api-key';

export const configAxios = (contentType) => {
	const config = {
		baseURL: API_KEYS.BASE_URL_LOCAL,
		headers: {
			'Content-Type': contentType ? contentType : 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	};
	return config;
};
