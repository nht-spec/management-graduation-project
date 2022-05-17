import { Pagination, Select } from 'antd';
import React from 'react';
import { pagination } from '../../constants/pagination';

function Paginations(props) {
	const { Option } = Select;
	const {
		current,
		onChange,
		total,
		pageSize,
		pageSizeOptions,
		setPageSize,
		width,
	} = props;
	return (
		<div className='pagination'>
			<Pagination
				{...pagination}
				current={current}
				onChange={onChange}
				total={total}
				pageSize={pageSize}
				responsive={true}
			/>

			<Select
				size={width <= 551 ? 'small' : 'middle'}
				className='page-size-options'
				defaultValue={`${pageSize} / trang`}
				onChange={setPageSize}
			>
				{pageSizeOptions.map((size, idx) => (
					<Option key={idx} value={size}>{`${size} / trang`}</Option>
				))}
			</Select>
		</div>
	);
}

export default Paginations;
