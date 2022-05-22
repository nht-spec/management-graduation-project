import { BarsOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Modal, Select, Tag } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import classApi from '../../api/classApi';
import studentApi from '../../api/studentApi';
import InputField from '../Shared/Form-Control/InputField';
import { dataFormAddClass } from './dataForm';

function ClassAction(props) {
	const { loading, classList } = props;
	const [addClass, setAddClass] = useState(false);
	const [isEmty, setIsEmty] = useState(false);
	const [deleteClass, setDeleteClass] = useState(false);
	const [keyId, setkeyId] = useState(null);

	const form = useForm({
		defaultValues: {
			addclass: '',
		},
	});

	useEffect(() => {
		let componentMounted = true;
		setTimeout(() => {
			if (componentMounted && classList.length === 0) {
				setAddClass(true);
				setIsEmty(true);
			}
		}, 500);

		return () => {
			componentMounted = false;
		};
	}, []);

	const transformed = classList.map(({ _id: value, name: label }) => ({
		value,
		label,
	}));

	function tagRender(props) {
		const { label, closable, onClose } = props;

		const onPreventMouseDown = (event) => {
			event.preventDefault();
			event.stopPropagation();
		};
		return (
			<Tag
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
				style={{ marginRight: 3 }}
			>
				{label}
			</Tag>
		);
	}

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
		const data = value.addclass;
		const multipleInput = data.split(' ').map((x) => {
			return { ['name']: x };
		});

		try {
			await classApi.create({ newClassList: multipleInput });
			message.success('Thêm thành công!');
			form.reset();
		} catch (err) {
			message.error(`${err.response.data}`);
		}
	};

	const onChange = (keyId) => {
		setkeyId(keyId);
	};

	const handleDelete = () => {
		if (keyId) {
			(async () => {
				try {
					await classApi.deleteall({ listSelect: keyId });
					await studentApi.delete({ listSelect: keyId });
					message.success('Xoá thành công!');
					setkeyId(null);
				} catch (err) {
					message.error(`${err}`);
				}
			})();
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
				title='Thêm lớp mới'
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
					<Button key='back' onClick={handleCancelAdd} disabled={isEmty}>
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
						onClick={() => handleDelete()}
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
					allowClear={true}
					mode='multiple'
					showArrow
					tagRender={tagRender}
					style={{ width: '100%' }}
					options={transformed}
				></Select>
			</Modal>

			<Dropdown overlay={menu} trigger={['click']}>
				<Button icon={<BarsOutlined />} />
			</Dropdown>
		</>
	);
}

export default ClassAction;
