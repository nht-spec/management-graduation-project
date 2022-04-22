import Spin from 'antd/es/spin';
import 'antd/es/spin/style/css';
import React from 'react';

export default function Loading(props) {
	// const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

	return <Spin size='large' tip='Đang tải trang...' />;
}
