import { Button, Col, Form, Input, Row, Select } from 'antd';
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/lib/upload/Dragger';
function SendMailForm(props) {
	const { onFinish } = props;
	const { Option } = Select;

	return (
		<Form name='basic' onFinish={onFinish} autoComplete='off' layout='vertical'>
			<Row gutter={[24, 8]}>
				<Col span={6} xs={24} sm={12} md={12} lg={12} xl={12}>
					<Form.Item
						label='Đến'
						name='to'
						rules={[{ required: true, message: 'Chọn lớp muốn gửi' }]}
					>
						<Select placeholder='Chọn lớp muốn gửi'>
							<Option value='jack'>Jack</Option>
							<Option value='lucy'>Lucy</Option>
							<Option value='tom'>Tom</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={6} xs={24} sm={12} md={12} lg={12} xl={12}>
					<Form.Item
						label='Chủ đề'
						name='subject'
						rules={[{ required: true, message: 'Nhập chủ đề' }]}
					>
						<Input placeholder='Nhập chủ đề muốn gửi' />
					</Form.Item>
				</Col>
				<Col span={6} xs={24} sm={24} md={24} lg={24} xl={24}>
					<Form.Item
						label='Nội dung'
						name='text'
						rules={[{ required: true, message: 'Nhập nội dung' }]}
					>
						<Input.TextArea placeholder='Nhập nội dung muốn gửi...' />
					</Form.Item>
				</Col>

				<Col span={6} xs={24} sm={24} md={24} lg={24} xl={24}>
					<Form.Item label='Tệp tin đính kèm' name='file'>
						<Dragger>
							<p className='ant-upload-drag-icon'>
								<InboxOutlined />
							</p>
							<p className='ant-upload-text'>
								Nhấp hoặc kéo tệp vào khu vực này để tải lên
							</p>
						</Dragger>
					</Form.Item>
				</Col>
			</Row>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Button icon={<InboxOutlined />} type='primary' htmlType='submit'>
					Gửi
				</Button>
			</div>
		</Form>
	);
}

export default SendMailForm;
