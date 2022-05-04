import { AutoComplete } from 'antd';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

export default function AutoCompleteField(props) {
	const { Option } = AutoComplete;
	const {
		form,
		name,
		placeholder,
		required,
		requiredErr,
		regex,
		patternErr,
		index,
		arr,
	} = props;

	const [result, setResult] = useState([]);

	const handleSearch = (value) => {
		let res = [];
		if (!value || value.indexOf(index) >= 0) {
			res = [];
		} else {
			res = arr.map((domain) => `${value}${index}${domain}`);
		}

		setResult(res);
	};

	return (
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
				<AutoComplete
					{...field}
					style={{
						width: '100%',
					}}
					onSearch={handleSearch}
					placeholder={placeholder}
				>
					{result.map((child) => (
						<Option key={child} value={child}>
							{child}
						</Option>
					))}
				</AutoComplete>
			)}
		/>
	);
}
