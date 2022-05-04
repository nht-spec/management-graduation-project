import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Shared/Loading';

const DashboardContainer = loadable(
	() => import('../../containers/Dashboard/DashboardContainer'),
	{
		fallback: <Loading />,
	}
);

export default [
	{
		path: '/dashboard',
		component: DashboardContainer,
		title: 'Bảng điều khiển',
	},
];
