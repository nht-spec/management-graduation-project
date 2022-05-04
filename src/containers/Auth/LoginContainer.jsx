import { Card, Col, Row } from 'antd';
import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
export default function LoginContainer(props) {
	return (
		<Row align='middle' justify='center' className='login_container_wrapper'>
			<div className='image_background' />
			<Col xs={20} sm={16} md={12} lg={10} xl={10}>
				<Card title='Login' className='login_card'>
					<LoginForm />
				</Card>
			</Col>
		</Row>
	);
}
