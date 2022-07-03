import { DatePicker, Form, Switch } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

function TimeRegisterForm(props) {
	const [checked, setChecked] = useState(false);
	const { onFinish, form } = props;

	const { RangePicker } = DatePicker;
	const disabledDate = (current) => {
		// Can not select days before today and today
		return current && current < moment().endOf('day');
	};

	const config = {
		rules: [
			{
				type: 'object',
				required: true,
				message: 'Please select time!',
			},
		],
	};
	const rangeConfig = {
		rules: [
			{
				type: 'array',
				required: true,
				message: 'Please select time!',
			},
		],
	};

	const onChange = (checked) => {
		setChecked(checked);
	};

	return (
		<Form
			form={form}
			name='time_related_controls'
			onFinish={onFinish}
			layout='vertical'
			size='large'
		>
			{!checked && (
				<Form.Item name='datepicker' label='Ngày kết thúc' {...config}>
					<DatePicker
						placeholder='Chọn ngày kết thúc'
						format='DD/MM/YYYY'
						disabledDate={disabledDate}
					/>
				</Form.Item>
			)}

			{checked && (
				<Form.Item
					name='rangepicker'
					label='Ngày bắt đầu / ngày kết thúc'
					{...rangeConfig}
				>
					<RangePicker
						disabledDate={disabledDate}
						placeholder={['Chọn ngày bắt đầu', 'Chọn ngày kết thúc']}
					/>
				</Form.Item>
			)}
			<Switch
				size='large'
				unCheckedChildren='chuyển sang chọn ngày bắt đầu / kết thúc'
				checkedChildren='Chuyển sang chọn ngày kết thúc'
				onChange={onChange}
			/>
		</Form>
	);
}

export default TimeRegisterForm;
