import { ControlOutlined } from '@ant-design/icons';
import loadable from '@loadable/component';
import { Card } from 'antd';
import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import Loading from '../../components/Shared/Loading';
import ClassInfo from '../../components/StudentManagement/ClassInfo';

const PageHeaderContainer = loadable(
	() => import('../../containers/Shared/PageHeaderContainer'),
	{
		fallback: <Loading />,
	}
);

const StudentManageInfo = loadable(
	() => import('../../components/StudentManagement/StudentManageInfo'),
	{
		fallback: <Loading />,
	}
);

function StudentManageContainer(props) {
	const [width, setWith] = useState(0);
	const [classChange, setClassChange] = useState('');
	const [defaultClass, setDefaultClass] = useState('');

	return (
		<>
			<PageHeaderContainer
				title='Quản lý sinh viên'
				icon={<ControlOutlined className='sidebar' />}
				// width={width}
			/>

			<ResizeObserver
				onResize={({ width }) => {
					setWith(width);
				}}
			>
				<div className='page-section'>
					<Card className='card-ms-form border-card mg-b-15'>
						<ClassInfo
							classChange={setClassChange}
							defaultClass={setDefaultClass}
							content={
								<StudentManageInfo
									defaultClass={defaultClass}
									classChange={classChange}
								/>
							}
						/>
						{/* <StudentManageInfo width={width} /> */}
					</Card>
				</div>
			</ResizeObserver>
		</>
	);
}

export default StudentManageContainer;
