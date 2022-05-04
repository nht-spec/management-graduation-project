import { UserOutlined } from '@ant-design/icons';
import React from 'react';

export const getGeneralSidebarMenu = () => [
	{
		key: 'dashboard',
		label: 'Đồ án chuyên ngành',
		icon: <UserOutlined />,

		children: [
			{
				key: 'dashboard',
				label: 'Danh sách',
				icon: (props) => <UserOutlined {...props} />,
			},
		],
		// item: [
		// 	{
		// 		key: 'personal-background',
		// 		transKey: 'profile_1',
		// 		icon: (props) => <UserOutlined {...props} />,
		// 	},
		// 	{
		// 		key: 'relatives',
		// 		transKey: 'profile_2',
		// 		icon: (props) => <UsergroupAddOutlined {...props} />,
		// 	},
		// ],
	},
	{
		key: 'demo',
		label: 'Đồ án tốt nghiệp',
		icon: <UserOutlined />,
		children: [
			{
				key: 'demo',
				label: 'demo_1',
				icon: <UserOutlined />,
			},
		],
	},
];
