import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function InputField(props) {
	const {
		form,
		name,
		placeholder,
		required,
		messageRequired,
		regex,
		messagePattern,
		error,
	} = props;

	return (
		<Controller
			name={name}
			control={form.control}
			rules={{
				required: {
					value: required,
					message: messageRequired,
				},
				pattern: {
					value: regex,
					message: messagePattern,
				},
			}}
			render={({ field }) => (
				<Input
					status={error[name]?.message ? 'error' : ''}
					{...field}
					placeholder={placeholder}
				/>
			)}
		/>
	);
}
