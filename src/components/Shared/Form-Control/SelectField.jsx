import { Select } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

export default function SelectField(props) {
	const { form, name, optionChoose, placeholder } = props;

	const { Option } = Select;

	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field: { onChange, onBlur, value } }) => (
				<Select
					onBlur={onBlur}
					style={{ width: '100%' }}
					onChange={onChange}
					checked={value}
					placeholder={placeholder}
				>
					{optionChoose.map((option, idx) => (
						<Option key={idx} value={option}>
							{option}
						</Option>
					))}
				</Select>
			)}
		/>
	);
}
