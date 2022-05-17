import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
} from '@ant-design/icons';
import { Avatar, Drawer, Dropdown, Layout, Menu } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getGeneralSidebarMenu } from '../utils/sidebar';

function AuthenticatedLayout(props) {
	const { children } = props;
	const history = useHistory();
	const location = useLocation();
	const { Header, Sider, Content, Footer } = Layout;
	const profile = localStorage.getItem('profile');
	const [collapsed, setCollapsed] = useState(false);
	const [visible, setVisible] = useState(false);
	const [tableWidth, setTableWidth] = useState(0);
	const items = getGeneralSidebarMenu(collapsed);

	if (profile == null) {
		history.push('/');
	}

	const menu = (
		<Menu
			items={[
				{
					label: (
						<p
							onClick={() => {
								localStorage.removeItem('profile');
								history.push('/');
							}}
						>
							Log out
						</p>
					),
					key: '0',
				},
			]}
		/>
	);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
		if (tableWidth < 768) {
			setVisible(!visible);
		}
	};

	const IconLogo = () => {
		return (
			<img
				style={{ width: '35px', height: '35px' }}
				src={require('../assets/images/idea.png')}
			/>
		);
	};

	const handleClick = (e) => {
		if (e.key) {
			history.push(`/${e.key}`);
		}
		if (e.key && tableWidth < 768) {
			history.push(`/${e.key}`);
			setVisible(!visible);
		}
	};

	const pathname = location.pathname.split('/');

	return (
		<ResizeObserver
			onResize={({ width }) => {
				setTableWidth(width);
			}}
		>
			<Layout className='layout-container'>
				{tableWidth >= 768 ? (
					<Sider
						trigger={null}
						theme='light'
						collapsible
						collapsed={collapsed}
						width={250}
					>
						<div className='logo'>
							<IconLogo />
							<p className={!collapsed ? 'logo_text' : 'logo_hiden'}>CMGP</p>
						</div>
						<Menu
							style={{
								fontFamily: 'Be Vietnam Pro',
								fontWeight: 600,
							}}
							onClick={handleClick}
							theme='light'
							mode='inline'
							defaultSelectedKeys={[`${pathname[1]}`]}
							selectedKeys={[`${pathname[1]}`]}
							items={items}
						/>
					</Sider>
				) : (
					<Drawer
						title='CMGP'
						placement='left'
						closable={true}
						width={300}
						onClose={toggleCollapsed}
						visible={visible}
						keyboard={true}
						closeIcon={<IconLogo />}
					>
						<Menu
							onClick={handleClick}
							theme='light'
							mode='inline'
							defaultSelectedKeys={[`${location.pathname.slice(1)}`]}
							items={items}
						/>
					</Drawer>
				)}
				<Layout className='site-layout'>
					<Header
						className='site-layout-background header-layout'
						style={{ padding: 0 }}
					>
						{React.createElement(
							collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: 'trigger',
								onClick: toggleCollapsed,
							}
						)}
						<Dropdown
							overlay={menu}
							trigger={['click']}
							placement='bottomRight'
							arrow
						>
							<Avatar
								onClick={(e) => e.preventDefault()}
								size={35}
								icon={<UserOutlined />}
								style={{ marginRight: '16px' }}
							/>
						</Dropdown>
					</Header>
					<Content className='content-layout'>{children}</Content>
					<Footer>@2022</Footer>
				</Layout>
			</Layout>
		</ResizeObserver>
	);
}

export default AuthenticatedLayout;
