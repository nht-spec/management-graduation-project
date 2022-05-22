import axiosApi from './axiosApi';

const classApi = {
	create(className) {
		const url = '/api/class';
		return axiosApi.post(url, className);
	},
	// put(params, lecturerId) {
	// 	const url = `/api/lecturer/${lecturerId}`;
	// 	return axiosApi.put(url, params);
	// },

	get() {
		const url = '/api/class';
		return axiosApi.get(url);
	},

	delete(classId) {
		const url = `/api/class/${classId.classId}`;
		return axiosApi.delete(url, { data: classId });
	},

	deleteall(listSelect) {
		const url = '/api/class/delete';
		return axiosApi.delete(url, { data: listSelect });
	},
};
export default classApi;
