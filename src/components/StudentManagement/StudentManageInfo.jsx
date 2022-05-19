import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import studentApi from '../../api/studentApi';
import useGetStudentIdList from '../../hooks/useGetStudentIdList';
import useGetStudentList from '../../hooks/useGetStudentList';
import useSocket from '../../hooks/useSocket';
import Paginations from '../Shared/Paginations';
import DetailStudentInfo from './DetailStudentInfo';
import TableDataGrid from './TableDataGrid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { detailStudent } from './dataForm';

function StudentManageInfo({ width }) {
	const [listSelect, setListSelect] = useState([]);
	const pageSizeOptions = [5, 10, 15];
	const [current, setCurrent] = useState(1);
	const [pageSize, setPageSize] = useState(5);
	const [detailInfo, setDetailInfo] = useState(null);
	const [isAddFalse, setIsAddFalse] = useState(false);
	const [isExpan, setIsExpan] = useState(false);
	const [isAddRow, setIsAddRow] = useState(false);
	const [studentId, setStudentId] = useState('');
	const [fields, setFields] = useState([{ name: [], value: '' }]);

	function onChange(current, pageSize) {
		setCurrent(current);
		setPageSize(pageSize);
	}
	const { socket } = useSocket();
	const { studentIdList } = useGetStudentIdList(socket);
	const { loading, updateStudent, studentList } = useGetStudentList(
		socket,
		current,
		pageSize
	);

	const TitleLabel = () => {
		return (
			<div className='toolbar-label'>
				<p className='student-list-title'>Danh sách sinh viên đăng ký</p>
			</div>
		);
	};

	const onRowExpanding = (e) => {
		e.component.collapseAll(-1);
		setFields(detailStudent(e));
	};

	const DetailTemplate = () => {
		return <DetailStudentInfo fields={fields} />;
	};

	const onSelectionChanged = (key) => {
		const data = key.selectedRowsData;
		const studentId = data.map((child) => child._id);
		setListSelect(studentId);
	};

	//DELETE ONE
	const onRowRemoving = async (e) => {
		const data = e?.data._id;

		if (data) {
			try {
				await studentApi.delete({ listSelect: [data] });
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
				await studentApi.delete({ listSelect });
				message.success('Xoá thành công!');
			} catch (err) {
				message.error(err);
			}
		}
	};

	const onRowInserting = async (value) => {
		try {
			await studentApi.create({ newListStudent: [value.data] });
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
			await studentApi.put({ ...newData, studentId: id }, id);
			message.success('Sửa thành công!');
		} catch (err) {
			message.error(`${err}`);
			setIsAddFalse(true);
		}
	};

	const onDetailClick = (e) => {
		const data = e.row.data;
		setDetailInfo(data);
		setIsExpan(true);
	};

	// useEffect(() => {
	// 	setCurrent(1);
	// }, [updateStudent]);

	const onInitNewRow = () => {
		setIsAddRow(true);
	};

	const onEditingStart = (e) => {
		setStudentId(e.data.mssv);
		setIsAddRow(false);
	};

	const validateStudent = (e) => {
		const result = studentIdList.filter((mssv) => mssv === e.value);

		if (!isAddRow && e.value === studentId && result.length !== 0) {
			return result;
		}
		if (!isAddRow && e.value !== studentId && result.length === 0) {
			return result;
		}

		if (isAddRow && result.length === 0) {
			return result;
		}
	};

	const onExporting = (e) => {
		const workbook = new Workbook();
		const worksheet = workbook.addWorksheet('Danh sách sinh viên đăng kí');

		exportDataGrid({
			component: e.component,
			worksheet,
			autoFilterEnabled: true,
		}).then(() => {
			workbook.xlsx.writeBuffer().then((buffer) => {
				saveAs(
					new Blob([buffer], { type: 'application/octet-stream' }),
					'Danh sách sinh viên đăng kí.xlsx'
				);
			});
		});
		e.cancel = true;
	};

	return (
		<>
			<TableDataGrid
				handleDelete={handleDelete}
				onSelectionChanged={onSelectionChanged}
				dataSource={studentList?.results}
				onRowInserting={onRowInserting}
				onRowUpdating={onRowUpdating}
				onRowRemoving={onRowRemoving}
				onRowExpanding={onRowExpanding}
				onDetailClick={onDetailClick}
				TitleLabel={TitleLabel}
				isAddFalse={isAddFalse}
				loading={loading}
				validateStudent={validateStudent}
				onInitNewRow={onInitNewRow}
				onEditingStart={onEditingStart}
				onExporting={onExporting}
				listSelect={listSelect}
				DetailTemplate={DetailTemplate}
			/>

			<Paginations
				width={width}
				current={current}
				onChange={onChange}
				total={studentList?.total}
				pageSize={pageSize}
				pageSizeOptions={pageSizeOptions}
				setPageSize={setPageSize}
			/>
		</>
	);
}

export default StudentManageInfo;
