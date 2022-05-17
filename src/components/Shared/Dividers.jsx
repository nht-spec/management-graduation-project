import { Divider } from 'antd';
import React from 'react';

function Dividers(props) {
	const { title, orientation } = props;
	return <Divider orientation={orientation}>{title}</Divider>;
}

export default Dividers;
