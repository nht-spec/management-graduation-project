import { Button, Form, message, Modal } from 'antd';
import React from 'react';
import timeSpecializedApi from '../../api/timeSpecializedApi';
import TimeRegisterForm from './TimeRegisterForm';

function TimeRegister(props) {
	const { visible, handleCancel, handleVisible } = props;
	const [form] = Form.useForm();

	const onFinish = async (fieldsValue) => {
		try {
			if (fieldsValue.datepicker != undefined) {
				await timeSpecializedApi.create({
					time: new Date(fieldsValue.datepicker).getTime(),
				});

				message.success('Bật thành công!');
				form.resetFields();
				handleVisible(false);
			}

			if (fieldsValue.rangepicker != undefined) {
				await timeSpecializedApi.create({
					time: `${new Date(fieldsValue.rangepicker[0]).getTime()} ${new Date(
						fieldsValue.rangepicker[1]
					).getTime()}`,
				});

				message.success('Bật thành công!');
				form.resetFields();
				handleVisible(false);
			}
		} catch (err) {
			message.error(`${err}`);
		}
	};

	return (
		<Modal
			centered={true}
			visible={visible}
			title='Chọn thời gian cho phép đăng ký'
			onCancel={handleCancel}
			footer={[
				<Button key='back' onClick={handleCancel}>
					Huỷ
				</Button>,
				<Button key='submit' type='primary' onClick={form.submit}>
					Lưu
				</Button>,
			]}
		>
			<TimeRegisterForm onFinish={onFinish} form={form} />
		</Modal>
	);
}

export default TimeRegister;
