import React from 'react';
import SendMailForm from './SendMailForm';

function SendMailNotification(props) {
	const onFinish = () => {};
	return (
		<div>
			<SendMailForm onFinish={onFinish} />
		</div>
	);
}

export default SendMailNotification;
