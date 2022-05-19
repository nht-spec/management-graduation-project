import { Col, Form, Input, Row } from 'antd';
import React from 'react';

function DetailStudentInfo({ fields }) {
	const filterFields = fields.map((field) => {
		if (field.name === 'undefined') {
			return (field.value = '');
		}
		return field;
	});

	return (
		<Form layout='vertical' fields={filterFields}>
			<Row gutter={[24, 8]} className='master-detail-caption'>
				{fields.map((data, idx) => (
					<Col key={idx} span={6} xs={24} sm={12} md={12} lg={8} xl={8}>
						<Form.Item name={data.name} label={data.title}>
							<Input />
						</Form.Item>
					</Col>
				))}
			</Row>
		</Form>
	);
}

export default DetailStudentInfo;
