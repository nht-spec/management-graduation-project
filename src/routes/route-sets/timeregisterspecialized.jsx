import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Shared/Loading';

const TimeRegisterSpecializedContainer = loadable(
	() =>
		import(
			'../../containers/ TimeRegisterSpecialized/ TimeRegisterSpecializedContainer'
		),
	{
		fallback: <Loading />,
	}
);

export default [
	{
		path: '/time_register_specialized',
		component: TimeRegisterSpecializedContainer,
		title: 'Thời gian đăng ký',
	},
];
