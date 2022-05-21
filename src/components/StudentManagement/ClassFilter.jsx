import {
	DeleteOutlined,
	FileAddOutlined,
	MoreOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Modal, Select } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../Shared/Form-Control/InputField';
import Text from 'antd/lib/typography/Text';
import classApi from '../../api/classApi';
import { useSelector } from 'react-redux';
import studentApi from '../../api/studentApi';

function ClassFilter(props) {
	const studentId = useSelector((state) => state);

	const { classList } = props;
	const { Option } = Select;

	const [showModalAdd, setShowModalAdd] = useState(false);
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [classSelect, setClassSelect] = useState(null);

	const handleAdd = () => {
		setShowModalAdd(true);
	};

	const handleCancelAdd = () => {
		setShowModalAdd(false);
	};

	const handleDelete = () => {
		setShowModalDelete(true);
	};
	const handleCancelDelete = () => {
		setShowModalDelete(false);
	};

	const menu = (
		<Menu
			items={[
				{
					icon: <FileAddOutlined />,
					label: 'Thêm lớp',
					key: '0',
					onClick: handleAdd,
				},
				{
					icon: <DeleteOutlined />,
					label: 'Xoá lớp',
					key: '1',
					onClick: handleDelete,
				},
			]}
		/>
	);

	const form = useForm({
		defaultValues: {
			classname: '',
		},
	});

	const error = form.formState.errors;

	const onSubmit = async (value) => {
		try {
			await classApi.create(value);
			message.success('Thêm lớp thành công!');
		} catch (err) {
			message.success(`${err}`);
		}
		form.reset();
	};

	const onChange = (value) => {
		setClassSelect(value);
	};

	const handleDeleteClass = async (classSelect, studentSelect) => {
		const { studentId } = studentSelect;

		try {
			await studentApi.delete({ listSelect: studentId });
			await classApi.delete({ classId: classSelect });
			message.success('Xoá thành công!');
			// window.location.reload();
		} catch (err) {
			message.error(`${err}`);
		}
	};

	return (
		<>
			<Modal
				closeIcon={false}
				centered={true}
				title='Thêm lớp'
				visible={showModalAdd}
				footer={[
					<Button key='back' onClick={handleCancelAdd}>
						Huỷ
					</Button>,
					<Button
						key='submit'
						onClick={form.handleSubmit(onSubmit)}
						type='primary'
						htmlType='submit'
					>
						Lưu
					</Button>,
				]}
			>
				<form>
					<InputField
						name='classname'
						form={form}
						required={true}
						messageRequired='Lớp là bắt buộc'
						title='Mã lớp'
						placeholder='Nhập mã lớp'
						error={error}
					/>
					{error['classname']?.message && (
						<Text type='danger'>{error['classname']?.message}</Text>
					)}
				</form>
			</Modal>

			<Modal
				centered={true}
				title='Xoá lớp'
				visible={showModalDelete}
				onCancel={handleCancelDelete}
				footer={[
					<Button key='back' onClick={handleCancelDelete}>
						Huỷ
					</Button>,
					<Button
						key='submit'
						onClick={() => handleDeleteClass(classSelect, studentId)}
						type='primary'
					>
						Xoá
					</Button>,
				]}
			>
				<Select
					placeholder='Chọn lớp muốn xoá'
					allowClear={true}
					onChange={onChange}
				>
					{classList.map((child, idx) => (
						<Option key={idx} value={child._id}>
							{child.classname}
						</Option>
					))}
				</Select>
			</Modal>

			<Dropdown overlay={menu} trigger={['click']}>
				<Button>
					<MoreOutlined />
				</Button>
			</Dropdown>
		</>
	);
}

export default ClassFilter;
