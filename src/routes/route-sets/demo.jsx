import React from 'react';
import loadable from '@loadable/component';
import Loading from '../../components/Shared/Loading';

const DemoContainer = loadable(() => import('../../containers/DemoContainer'), {
	fallback: <Loading />,
});

export default [
	{
		path: '/demo',
		component: DemoContainer,
		title: 'demo',
	},
];
