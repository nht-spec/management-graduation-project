import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Shared/Loading';

const LecturerManageContainer = loadable(
	() => import('../../containers/LecturerManagement/LecturerManageContainer'),
	{
		fallback: <Loading />,
	}
);

export default [
	{
		path: '/lecturer_management',
		component: LecturerManageContainer,
		title: 'Quản lí giảng viên',
	},
];
