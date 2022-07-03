import axios from 'axios';
import { API_KEYS } from '../constants/api-key';

const axiosApi = axios.create({
	// config
	baseURL: API_KEYS.BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});
export default axiosApi;
