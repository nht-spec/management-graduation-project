import {
	BulbOutlined,
	FieldTimeOutlined,
	PoweroffOutlined,
} from '@ant-design/icons';
import loadable from '@loadable/component';
import {
	Button,
	Card,
	Col,
	message,
	PageHeader,
	Row,
	Space,
	Switch,
} from 'antd';
import ResizeObserver from 'rc-resize-observer';
import React, { useState } from 'react';
import timeSpecializedApi from '../../api/timeSpecializedApi';
import Loading from '../../components/Shared/Loading';
import SendMailNotification from '../../components/TimeRegisterSpecialized/SendMailNotification';
import useGetTimeSpecialized from '../../hooks/useGetTimeSpecialized';
import useSocket from '../../hooks/useSocket';

const PageHeaderContainer = loadable(
	() => import('../Shared/PageHeaderContainer'),
	{
		fallback: <Loading />,
	}
);

const TimeRegisterContainer = loadable(
	() => import('../../components/TimeRegisterSpecialized/TimeRegister'),
	{
		fallback: <Loading />,
	}
);

const TimeInfoContainer = loadable(
	() => import('../../components/TimeRegisterSpecialized/TimeInfo'),
	{
		fallback: <Loading />,
	}
);

function TimeRegisterSpecializedContainer(props) {
	const [width, setWith] = useState(0);
	const [visible, setVisible] = useState(false);
	const { socket } = useSocket();
	const { loading, timeData } = useGetTimeSpecialized(socket);

	const handleCancel = () => {
		setVisible(false);
	};

	const handleVisible = () => {
		setVisible(false);
	};

	const handleTurnOff = async () => {
		try {
			await timeSpecializedApi.delete({ timeId: timeData[0]._id });
			message.success('Tắt thành công!');
		} catch (err) {
			console.log(err);
			message.error(`${err}`);
		}
	};

	if (loading) {
		return <Loading />;
	}

	return (
		<>
			<PageHeaderContainer
				title='Thời gian đăng ký'
				icon={<FieldTimeOutlined className='sidebar' />}
			/>

			<ResizeObserver
				onResize={({ width }) => {
					setWith(width);
				}}
			>
				<Card className='card-ms-form border-card mg-b-15'>
					<Row gutter={[24, 40]}>
						<Col span={24}>
							<PageHeader
								title='Thông tin thời gian cho phép sinh viên đăng ký'
								extra={
									<div>
										{timeData.length === 0 ? (
											<Button
												icon={<BulbOutlined />}
												type='primary'
												onClick={() => setVisible(true)}
											>
												Bật cho phép đăng ký
											</Button>
										) : (
											<Button
												type='primary'
												danger
												icon={<PoweroffOutlined />}
												onClick={handleTurnOff}
											>
												Tắt cho phép đăng ký
											</Button>
										)}
									</div>
								}
							>
								<TimeRegisterContainer
									visible={visible}
									handleVisible={handleVisible}
									handleCancel={handleCancel}
								/>
								<TimeInfoContainer timeData={timeData} />
							</PageHeader>
						</Col>

						<Col span={24}>
							<PageHeader
								title='Gửi thông báo đến sinh viên'
								extra={
									<Space>
										<Switch />
										Gửi tự động
									</Space>
								}
							>
								<SendMailNotification />
							</PageHeader>
						</Col>
					</Row>
				</Card>
			</ResizeObserver>
		</>
	);
}

export default TimeRegisterSpecializedContainer;
