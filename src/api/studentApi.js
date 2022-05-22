import axiosApi from './axiosApi';

const studentApi = {
	create(newListStudent) {
		const url = '/api/student';
		return axiosApi.post(url, newListStudent);
	},
	put(params, id) {
		const url = `/api/student/${id}`;
		return axiosApi.put(url, params);
	},

	get(params) {
		const url = '/api/student';
		return axiosApi.get(url, { params });
	},

	getStudentIdList() {
		const url = '/api/student/list/student';
		return axiosApi.get(url);
	},

	deleteselect(listSelect) {
		const url = '/api/student/select/delete';
		return axiosApi.delete(url, { data: listSelect });
	},

	delete(listSelect) {
		const url = '/api/student/delete';
		return axiosApi.delete(url, { data: listSelect });
	},
};
export default studentApi;
