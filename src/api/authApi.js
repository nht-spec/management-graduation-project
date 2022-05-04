import axiosApi from './axiosApi';

const authApi = {
	login(params) {
		const url = '/api/auth/login';
		return axiosApi.post(url, params);
	},
};
export default authApi;
