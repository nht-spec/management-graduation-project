const getNameMap = (entityId, entityDisplay, t) => ({
	'/dashboard': { displayName: 'Bảng điều khiển', isNavigable: true },
	'/student_management': {
		displayName: 'Quản lý sinh viên',
		isNavigable: true,
	},
	'/lecturer_management': {
		displayName: 'Quản lý giảng viên',
		isNavigable: true,
	},
});
export default getNameMap;
