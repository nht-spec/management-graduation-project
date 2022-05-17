import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function InputAreaField(props) {
	const { form, name, placeholder } = props;

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field }) => (
				<Input.TextArea rows={1} {...field} placeholder={placeholder} />
			)}
		/>
	);
}
