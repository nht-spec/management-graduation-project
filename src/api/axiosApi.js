import axios from 'axios';
import { API_KEYS } from '../constants/api-key';

const axiosApi = axios.create({
	baseURL: API_KEYS.BASE_URL_LOCAL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});
export default axiosApi;
