import { List } from 'antd';
import { Popup, Position } from 'devextreme-react/popup';
import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';

function DetailStudentInfo(props) {
	const { detailInfo, isExpan, setIsExpan } = props;

	const data = [
		{
			title: 'MSSV',
			description: `${detailInfo?.mssv}`,
		},
		{
			title: 'Họ và tên',
			description: `${detailInfo?.name}`,
		},
		{
			title: 'Tên đề tài tiếng việt',
			description: `${detailInfo?.vntopic}`,
		},
		{
			title: 'Tên đề tài tiếng anh',
			description: `${detailInfo?.entopic}`,
		},
		{
			title: 'Giảng viên hướng dẫn',
			description: `${detailInfo?.instructor}`,
		},
		{
			title: 'Email',
			description: `${detailInfo?.email}`,
		},
		{
			title: 'Số điện thoại',
			description: `${detailInfo?.phone}`,
		},
		{
			title: 'STT sinh viên làm cùng đề tài',
			description: `${detailInfo?.samestudentwork}`,
		},
		{
			title: 'Ghi chú',
			description: `${detailInfo?.note}`,
		},
	];
	const closeButton = () => {
		setIsExpan(false);
	};

	return (
		<Popup
			visible={isExpan}
			dragEnabled={false}
			closeOnOutsideClick={true}
			onHiding={closeButton}
			showCloseButton={true}
			showTitle={true}
			title='Thông tin chi tiết'
		>
			<Position at='center' my='center' of='' />

			<ScrollView width='100%' height='100%'>
				<List
					itemLayout='horizontal'
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<List.Item.Meta
								title={<p>{item.title}</p>}
								description={`${item.description}`}
							/>
						</List.Item>
					)}
				/>
			</ScrollView>
		</Popup>
	);
}

export default DetailStudentInfo;
