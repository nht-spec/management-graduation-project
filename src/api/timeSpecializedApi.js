import axiosApi from './axiosApi';

const timeSpecializedApi = {
	create(params) {
		const url = '/api/time/specialized';
		return axiosApi.post(url, params);
	},

	get() {
		const url = '/api/time/specialized';
		return axiosApi.get(url);
	},

	put(id) {
		const url = `/api/time/specialized/${id.timeId}`;
		return axiosApi.put(url, { data: id });
	},

	delete(id) {
		const url = `/api/time/specialized/${id.timeId}`;
		return axiosApi.delete(url, { data: id });
	},
};
export default timeSpecializedApi;
