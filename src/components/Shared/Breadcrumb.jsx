import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const Breadcrumb = ({ breadcrumbNameMap, pathSnippets }) => {
	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
		const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
		return (
			<AntBreadcrumb.Item key={url}>
				{breadcrumbNameMap[url] && breadcrumbNameMap[url].isNavigable ? (
					<Link to={url}>{breadcrumbNameMap[url].displayName}</Link>
				) : (
					breadcrumbNameMap[url]?.displayName ?? 'N/A'
				)}
			</AntBreadcrumb.Item>
		);
	});

	const breadcrumbItems = [
		<AntBreadcrumb.Item key='home'>
			<Link to='/'>
				<HomeOutlined />
			</Link>
		</AntBreadcrumb.Item>,
	].concat(extraBreadcrumbItems);

	return <AntBreadcrumb>{breadcrumbItems}</AntBreadcrumb>;
};

export default Breadcrumb;
