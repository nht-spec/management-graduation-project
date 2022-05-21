import { BarsOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Modal, Select } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classApi from '../../api/classApi';
import studentApi from '../../api/studentApi';
import InputField from '../Shared/Form-Control/InputField';
import { dataFormAddClass } from './dataForm';

function ClassAction(props) {
	const { loading, classList } = props;
	const [addClass, setAddClass] = useState(false);
	const [deleteClass, setDeleteClass] = useState(false);
	const [keyId, setkeyId] = useState('');
	const { Option } = Select;
	const form = useForm({
		defaultValues: {
			addclass: '',
		},
	});

	const error = form.formState.errors;

	const handleAddClass = () => {
		setAddClass(true);
	};
	const handleCancelAdd = () => {
		setAddClass(false);
	};

	const handleDeleteClass = () => {
		setDeleteClass(true);
	};
	const handleCancelDelete = () => {
		setDeleteClass(false);
	};

	const onSubmit = async (value) => {
		try {
			await classApi.create({ name: value.addclass });
			message.success('Thêm thành công!');
		} catch (err) {
			message.error(`${err}`);
		}
		form.reset();
	};
	const onChange = (keyId) => {
		setkeyId(keyId);
	};

	const handleDelete = async (keyId) => {
		if (keyId) {
			try {
				await classApi.delete({ classId: keyId });
				await studentApi.delete({ listSelect: [keyId] });
				message.success('Xoá thành công ');
				setkeyId('');
			} catch (err) {
				message.error(`${err}`);
			}
		}
	};

	const menu = (
		<Menu
			items={[
				{
					label: <p>Thêm lớp</p>,
					icon: <PlusOutlined />,
					key: '0',
					onClick: handleAddClass,
				},
				{
					label: <p>Xoá lớp</p>,
					icon: <DeleteOutlined />,
					key: '1',
					onClick: handleDeleteClass,
				},
			]}
		/>
	);

	return (
		<>
			<Modal
				centered={true}
				title='Thêm lớp'
				visible={addClass}
				closable={false}
				footer={[
					<Button
						key='submit'
						type='primary'
						loading={loading}
						onClick={form.handleSubmit(onSubmit)}
					>
						Lưu
					</Button>,
					<Button key='back' onClick={handleCancelAdd}>
						Huỷ
					</Button>,
				]}
			>
				<InputField {...dataFormAddClass} form={form} error={error} />
				{error['addclass']?.message && (
					<Text type='danger'>{error['addclass']?.message}</Text>
				)}
			</Modal>

			<Modal
				centered={true}
				title='Xoá lớp'
				closable={false}
				visible={deleteClass}
				footer={[
					<Button
						danger
						key='submit'
						type='primary'
						loading={loading}
						onClick={() => handleDelete(keyId)}
					>
						Xoá
					</Button>,
					<Button key='back' onClick={handleCancelDelete}>
						Huỷ
					</Button>,
				]}
			>
				<Select
					placeholder='Chọn lớp cần xoá'
					onChange={onChange}
					value={keyId}
				>
					{classList?.map((child, idx) => (
						<Option key={idx} value={child._id}>
							{child.name}
						</Option>
					))}
				</Select>
			</Modal>

			<Dropdown overlay={menu} trigger={['click']}>
				<Button icon={<BarsOutlined />} />
			</Dropdown>
		</>
	);
}

export default ClassAction;
