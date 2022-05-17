import { Card, PageHeader } from 'antd';
import React from 'react';
import BreadcrumbContainer from './BreadcrumbContainer';
function PageHeaderContainer(props) {
	const { title, icon, width } = props;

	return (
		<Card className='card-ms-form border-card mg-b-15'>
			<PageHeader
				className='site-page-header'
				title={title}
				extra={[<BreadcrumbContainer key={title} />]}
				backIcon={icon}
				onBack={() => null}
			/>
		</Card>
	);
}

export default PageHeaderContainer;
