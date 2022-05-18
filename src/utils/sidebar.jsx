import {
	ReadOutlined,
	DashboardOutlined,
	BookOutlined,
	ControlOutlined,
	IdcardOutlined,
	GlobalOutlined,
	FieldTimeOutlined,
	FileDoneOutlined,
	TeamOutlined,
} from '@ant-design/icons';
import React from 'react';

export const getGeneralSidebarMenu = (collapsed) => [
	{
		key: 'dashboard',
		label: 'Bảng điều khiển',
		icon: (
			<DashboardOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
	},
	{
		key: 'lecturer_management',
		label: 'Quản lý giảng viên',
		icon: (
			<IdcardOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
	},

	{
		key: 'student_management',
		label: 'Quản lý sinh viên',
		icon: (
			<ControlOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
	},

	{
		key: 'specialized_projects',
		label: 'Đồ án chuyên ngành',
		icon: (
			<BookOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
		children: [
			{
				key: 'list_topics_specialized',
				label: 'Danh sách đề tài',
				icon: <GlobalOutlined className='sidebar' />,
			},

			{
				key: 'time_register_specialized',
				label: 'Thời gian đăng kí',
				icon: <FieldTimeOutlined className='sidebar' />,
			},
		],
	},
	{
		key: 'graduation_thesis',
		label: 'Đồ án tốt nghiệp',
		icon: (
			<FileDoneOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
		children: [
			{
				key: 'protect_the_council',
				label: 'Hội đồng bảo vệ',
				icon: <TeamOutlined className='sidebar' />,
			},
			{
				key: 'list_topics_graduation',
				label: 'Danh sách đề tài',
				icon: <GlobalOutlined className='sidebar' />,
			},

			{
				key: 'time_register_graduation',
				label: 'Thời gian đăng kí',
				icon: <FieldTimeOutlined className='sidebar' />,
			},
		],
	},
	{
		key: 'topic_repository',
		label: 'Kho đề tài',
		icon: (
			<ReadOutlined
				className={collapsed ? 'sidebar-collaped sidebar' : 'sidebar'}
			/>
		),
	},
];
