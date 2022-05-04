import { LoginOutlined } from '@ant-design/icons';
import { Button, Col, Row, Spin } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import authApi from '../../api/authApi';
import AutoCompleteField from '../Shared/Form-Control/AutoCompleteField';
import PasswordField from '../Shared/Form-Control/PasswordField';
import { inputData } from './inputData';

export default function LoginForm(props) {
	const profile = localStorage.getItem('profile');
	const history = useHistory();
	// const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);
	const res = ['gmail.com', 'gm.uit.edu.vn'];
	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const error = form.formState.errors;

	// console.log(profile);

	const onSubmit = (value) => {
		(async () => {
			try {
				setLoading(true);
				const result = await authApi.login(value);

				if (result.data) {
					const { createdAt, updatedAt, email, __v, ...others } = result.data;
					localStorage.setItem('profile', JSON.stringify(others));

					// const action = addProfile(others);
					// dispatch(action);
				}
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		})();
	};
	if (profile != null) {
		history.push('./dashboard');
	}
	return (
		<Spin size='large' spinning={loading} tip='Loading...'>
			<form
				className='login_form_container'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<Row gutter={[24, 18]}>
					{inputData.map((input) => (
						<Col span={24} key={input.id}>
							<div>
								<p>{input.title}</p>
								{input.name === 'email' ? (
									<AutoCompleteField
										form={form}
										{...input}
										index='@'
										arr={res}
									/>
								) : (
									<PasswordField form={form} {...input} />
								)}
								{error[input.name]?.message && (
									<Text type='danger'>{error[input.name]?.message}</Text>
								)}
							</div>
						</Col>
					))}
					<Col span={24}>
						<Button
							icon={<LoginOutlined />}
							htmlType='submit'
							type='primary'
							shape='round'
							size='middle'
						>
							Login
						</Button>
					</Col>
				</Row>
			</form>
		</Spin>
	);
}
