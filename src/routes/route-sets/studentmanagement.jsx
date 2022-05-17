import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Shared/Loading';

const StudentManageContainer = loadable(
	() => import('../../containers/StudentManagement/StudentManageContainer'),
	{
		fallback: <Loading />,
	}
);

export default [
	{
		path: '/student_management',
		component: StudentManageContainer,
		title: 'Quản lí sinh viên',
	},
];
