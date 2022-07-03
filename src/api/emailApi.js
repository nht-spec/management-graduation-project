import axiosApi from './axiosApi';

const emailApi = {
	create(params) {
		const url = '/api/email';
		return axiosApi.post(url, params);
	},
};
export default emailApi;
