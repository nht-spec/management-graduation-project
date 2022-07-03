import { Space, Table, Tag } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import Column from 'antd/lib/table/Column';
import moment from 'moment';
import React from 'react';
import timeSpecializedApi from '../../api/timeSpecializedApi';

function TimeInfo(props) {
	const { timeData } = props;

	const onFinish = async () => {
		const lengthTime = timeData[0]?.time.split(' ');

		if (lengthTime.length === 1) {
			try {
				await timeSpecializedApi.delete(timeData[0]._id);
			} catch (err) {
				console.log(err);
			}
		}

		if (lengthTime.length === 2) {
			try {
				await timeSpecializedApi.put({
					timeId: timeData[0]._id,
					time: lengthTime[1],
				});
			} catch (err) {
				console.log(err);
			}
		}
	};

	const RenderStartTime = () => {
		const startTime = timeData[0]?.time.split(' ');
		const formatStarTime = moment(Number.parseInt(startTime[0])).format(
			'DD/MM/YYYY'
		);
		return (
			<>
				{timeData.length != 0 && timeData[0].time && startTime.length === 2 && (
					<p>{formatStarTime}</p>
				)}

				{timeData.length != 0 && timeData[0].time && startTime.length === 1 && (
					<p>Hiện tại</p>
				)}
			</>
		);
	};

	const RenderEndTime = () => {
		const endTime = timeData[0]?.time.split(' ');

		const formatEndTimeOne = moment(Number.parseInt(endTime[0])).format(
			'DD/MM/YYYY'
		);
		const formatEndTimeTwo = moment(Number.parseInt(endTime[1])).format(
			'DD/MM/YYYY'
		);

		return (
			<>
				{timeData.length != 0 && timeData[0].time && endTime.length === 2 && (
					<p>{formatEndTimeTwo}</p>
				)}
				{timeData.length != 0 && timeData[0].time && endTime.length === 1 && (
					<p>{formatEndTimeOne}</p>
				)}
			</>
		);
	};

	const RenderStatus = () => {
		const lengthTime = timeData[0]?.time.split(' ');

		return (
			<>
				{lengthTime.length === 1 && <Tag color='lime'>Đã bật</Tag>}

				{lengthTime.length === 2 && <Tag color='magenta'>Chưa bật</Tag>}
			</>
		);
	};

	const RenderCountDown = () => {
		const lengthTime = timeData[0]?.time.split(' ');

		return (
			<>
				{lengthTime.length === 1 && (
					<Space align='center'>
						Kết thúc sau:
						<Countdown
							format='D:H:m'
							value={Number.parseInt(lengthTime[0])}
							onFinish={onFinish}
						/>
					</Space>
				)}

				{lengthTime.length === 2 && (
					<Space align='center'>
						Bắt đầu sau:
						<Countdown
							format='D:H:m'
							value={Number.parseInt(lengthTime[0])}
							onFinish={onFinish}
						/>
					</Space>
				)}
			</>
		);
	};

	return (
		<Table
			dataSource={timeData}
			rowKey='_id'
			pagination={false}
			bordered={true}
			scroll={{ x: 630 }}
		>
			<Column title='Thời gian bắt đầu' render={RenderStartTime} />

			<Column title='Thời gian kết thúc' render={RenderEndTime} />
			<Column title='Trạng thái' render={RenderStatus} />
			<Column title='Đếm ngược' render={RenderCountDown} />
		</Table>
	);
}

export default TimeInfo;
