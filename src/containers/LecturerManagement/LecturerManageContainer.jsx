import { IdcardOutlined } from '@ant-design/icons';
import loadable from '@loadable/component';
import { Card } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import Loading from '../../components/Shared/Loading';

const PageHeaderContainer = loadable(
	() => import('../Shared/PageHeaderContainer'),
	{
		fallback: <Loading />,
	}
);

function LecturerManageContainer(props) {
	const [width, setWith] = useState(0);

	return (
		<>
			<PageHeaderContainer
				title='Quản lý giảng viên'
				icon={<IdcardOutlined className='sidebar' />}
				// width={width}
			/>

			<ResizeObserver
				onResize={({ width }) => {
					setWith(width);
				}}
			>
				<div className='page-section'>
					<Card className='card-ms-form border-card mg-b-15'></Card>
				</div>
			</ResizeObserver>
		</>
	);
}

export default LecturerManageContainer;
