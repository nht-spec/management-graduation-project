import { Col, Form, Input, Row } from 'antd';
import React from 'react';

function DetailLecturer({ fields }) {
	return (
		<Form layout='vertical' fields={fields}>
			<Row gutter={[24, 8]} className='master-detail-caption'>
				{fields.map((data, idx) => (
					<Col
						key={idx}
						span={6}
						xs={24}
						sm={12}
						md={12}
						lg={data.title === 'Chức vụ' ? 24 : 8}
						xl={data.title === 'Chức vụ' ? 24 : 8}
					>
						<Form.Item name={data.name} label={data.title}>
							<Input />
						</Form.Item>
					</Col>
				))}
			</Row>
		</Form>
	);
}

export default DetailLecturer;
