import axios from 'axios';

const axiosApi = axios.create({
	baseURL: 'https://api-project-a.herokuapp.com/',
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});
export default axiosApi;
