import {
	EyeInvisibleOutlined,
	EyeTwoTone,
	LockOutlined,
} from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function PasswordField(props) {
	const {
		form,
		name,
		placeholder,
		required,
		requiredErr,
		regex,
		patternErr,
		title,
	} = props;

	return (
		<div>
			<Controller
				name={name}
				control={form.control}
				rules={{
					required: {
						value: required,
						message: requiredErr,
					},
					pattern: {
						value: regex,
						message: patternErr,
					},
				}}
				render={({ field }) => (
					<Input.Password
						title={title}
						prefix={<LockOutlined />}
						{...field}
						placeholder={placeholder}
						iconRender={(visible) =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
					/>
				)}
			/>
		</div>
	);
}
