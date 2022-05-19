import { message } from 'antd';
import React, { useState } from 'react';
import lecturerApi from '../../api/lecturerApi';
import useGetLecturerList from '../../hooks/useGetLecturerList';
import useSocket from '../../hooks/useSocket';
import Paginations from '../Shared/Paginations';
import { detailLecturer } from './dataLecturer';
import DetailLecturer from './DetailLecturer';
import TableDataGrid from './TableDataGrid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';

function LecturerManageInfo({ width }) {
	const [listSelect, setListSelect] = useState([]);
	const pageSizeOptions = [5, 10, 15];
	const [current, setCurrent] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [fields, setFields] = useState([{ name: [], value: '' }]);

	function onChange(current, pageSize) {
		setCurrent(current);
		setPageSize(pageSize);
	}
	const { socket } = useSocket();

	const { loading, lecturerList } = useGetLecturerList(
		socket,
		current,
		pageSize
	);

	const onRowExpanding = (e) => {
		e.component.collapseAll(-1);
		setFields(detailLecturer(e));
	};

	const TitleLabel = () => {
		return (
			<div className='toolbar-label'>
				<p className='student-list-title'>Danh sách giảng viên</p>
			</div>
		);
	};

	const DetailTemplate = () => {
		return <DetailLecturer fields={fields} />;
	};

	const onSelectionChanged = (key) => {
		const data = key.selectedRowsData;
		const lecturerId = data.map((child) => child._id);
		setListSelect(lecturerId);
	};

	//DELETE ONE
	const onRowRemoving = async (e) => {
		const data = e?.data._id;

		if (data) {
			try {
				await lecturerApi.delete({ listSelect: [data] });
				message.success('Xoá thành công!');
			} catch (err) {
				message.error(err);
			}
		}
	};

	//DELETE ROW SELECT
	const handleDelete = async () => {
		if (listSelect.length !== 0) {
			try {
				await lecturerApi.delete({ listSelect });
				message.success('Xoá thành công!');
			} catch (err) {
				message.error(err);
			}
		}
	};

	const onRowInserting = async (value) => {
		try {
			await lecturerApi.create({ newLecturer: [value.data] });
			message.success('Thêm thành công!');
		} catch (err) {
			if (err) {
				message.error(`${err}`);
			}
		}
	};

	const onRowUpdating = async (e) => {
		const newData = e.newData;
		const id = e.key._id;
		try {
			await lecturerApi.put({ ...newData, lecturerId: id }, id);
			message.success('Sửa thành công!');
		} catch (err) {
			message.error(`${err}`);
		}
	};

	const onExporting = (e) => {
		const workbook = new Workbook();
		const worksheet = workbook.addWorksheet('Danh sách giảng viên');

		exportDataGrid({
			component: e.component,
			worksheet,
			autoFilterEnabled: true,
		}).then(() => {
			workbook.xlsx.writeBuffer().then((buffer) => {
				saveAs(
					new Blob([buffer], { type: 'application/octet-stream' }),
					'Danh sách giảng viên.xlsx'
				);
			});
		});
		e.cancel = true;
	};

	return (
		<div>
			<TableDataGrid
				loading={loading}
				dataSource={lecturerList?.results}
				TitleLabel={TitleLabel}
				DetailTemplate={DetailTemplate}
				onRowExpanding={onRowExpanding}
				onSelectionChanged={onSelectionChanged}
				onRowRemoving={onRowRemoving}
				handleDelete={handleDelete}
				onRowInserting={onRowInserting}
				onRowUpdating={onRowUpdating}
				onExporting={onExporting}
				listSelect={listSelect}
			/>

			<Paginations
				width={width}
				current={current}
				onChange={onChange}
				total={lecturerList?.total}
				pageSize={pageSize}
				pageSizeOptions={pageSizeOptions}
				setPageSize={setPageSize}
			/>
		</div>
	);
}

export default LecturerManageInfo;
