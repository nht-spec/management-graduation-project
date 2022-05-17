import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Exception = ({ desc, img, showAction, title, type }) => {
	return (
		<div className='message-page-wrapper'>
			<div className='error-page-inner-container'>
				<Row gutter={[20, 20]}>
					<Col xs={24} sm={12}>
						<img className='full-width' src={img} alt={type} />
					</Col>
					<Col xs={24} sm={12}>
						<Title className='error-page-title'>{title}</Title>
						<Paragraph className='error-page-description'>{desc}</Paragraph>
						{showAction && (
							<Link to='/'>
								<Button type='primary'>Back to Home</Button>
							</Link>
						)}
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Exception;
