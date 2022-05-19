import axiosApi from './axiosApi';

const lecturerApi = {
	create(newLecturer) {
		const url = '/api/lecturer';
		return axiosApi.post(url, newLecturer);
	},
	put(params, lecturerId) {
		const url = `/api/lecturer/${lecturerId}`;
		return axiosApi.put(url, params);
	},

	get(params) {
		const url = '/api/lecturer';
		return axiosApi.get(url, { params });
	},

	delete(listSelect) {
		const url = '/api/lecturer/delete';
		return axiosApi.delete(url, { data: listSelect });
	},
};
export default lecturerApi;
