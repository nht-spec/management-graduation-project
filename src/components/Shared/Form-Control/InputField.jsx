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
			render={({ field }) => <input {...field} placeholder={placeholder} />}
		/>
	);
}
