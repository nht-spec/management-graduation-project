import { Button, message, Modal, Tabs } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classApi from '../../api/classApi';
import useGetClassName from '../../hooks/useGetClassName';
import useSocket from '../../hooks/useSocket';
import InputField from '../Shared/Form-Control/InputField';
import Loading from '../Shared/Loading';
import ClassFilter from './ClassFilter';

function ClassInfo(props) {
	const { content, classChange, defaultClass } = props;
	const { socket } = useSocket();
	const { TabPane } = Tabs;
	const { loading, classList } = useGetClassName(socket);

	const form = useForm({
		defaultValues: {
			classname: '',
		},
	});

	const error = form.formState.errors;

	useEffect(() => {
		if (defaultClass) {
			defaultClass && defaultClass(classList[0]?.classname);
		}
	}, [classList]);

	const onChange = (classname) => {
		if (classChange) {
			classChange && classChange(classname);
		}
	};

	const onSubmit = async (value) => {
		try {
			await classApi.create(value);
			// message.success('Thêm lớp thành công!');
		} catch (err) {
			message.success(`${err}`);
		}
		form.reset();
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			{classList.length !== 0 ? (
				<Tabs
					defaultActiveKey='1'
					type='card'
					onChange={onChange}
					tabBarExtraContent={<ClassFilter classList={classList} />}
				>
					<>
						{classList?.map((child) => (
							<TabPane tab={child.classname} key={child.classname}>
								{content}
							</TabPane>
						))}
					</>
				</Tabs>
			) : (
				<Modal
					centered={true}
					title='Tạo lớp mới'
					visible={true}
					footer={[
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
			)}
		</>
	);
}

export default ClassInfo;
