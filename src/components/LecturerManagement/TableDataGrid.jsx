import DataGrid, {
	Button,
	Column,
	Editing,
	Export,
	FilterRow,
	Form,
	Item,
	Lookup,
	MasterDetail,
	PatternRule,
	RequiredRule,
	SearchPanel,
	Selection,
	Texts,
	Toolbar,
} from 'devextreme-react/data-grid';
import React, { useEffect, useRef } from 'react';
import REGEX_KEY from '../../constants/regex-key';
import Buttons from '../Shared/Buttons';
import { genderOption } from './dataLecturer';

function TableDataGrid(props) {
	const gridRef = useRef(null);

	const {
		loading,
		dataSource,
		handleDelete,
		TitleLabel,
		DetailTemplate,
		onRowExpanding,
		onSelectionChanged,
		onRowUpdating,
		onRowRemoving,
		onRowInserting,
		onExporting,
		listSelect,
	} = props;

	useEffect(() => {
		if (loading) {
			gridRef.current.instance.beginCustomLoading();
		} else {
			gridRef.current.instance.endCustomLoading();
		}
	}, [loading]);

	return (
		<DataGrid
			noDataText='Không có dữ liệu'
			showBorders={true}
			showRowLines={true}
			showColumnLines={true}
			columnAutoWidth={true}
			allowColumnReordering={true}
			ref={gridRef}
			onRowExpanding={onRowExpanding}
			onSelectionChanged={onSelectionChanged}
			dataSource={dataSource}
			onRowUpdating={onRowUpdating}
			onRowRemoving={onRowRemoving}
			onRowInserting={onRowInserting}
			onExporting={onExporting}
		>
			<FilterRow visible='auto' />
			<Selection
				mode='multiple'
				showCheckBoxesMode='always'
				fixed={true}
				fixedPosition='left'
			/>

			<SearchPanel
				visible={true}
				highlightCaseSensitive={true}
				placeholder='Tìm kiếm...'
			/>

			<MasterDetail
				enabled={true}
				// autoExpandAll={true}
				component={DetailTemplate}
			/>

			<Editing
				mode='form'
				useIcons={true}
				allowUpdating={true}
				allowAdding={true}
				allowDeleting={true}
			>
				<Texts
					addRow='Thêm mới'
					cancelRowChanges='Hủy bỏ'
					saveRowChanges='Lưu'
					confirmDeleteMessage='Bạn có chắc chắn muốn xóa sinh viên này không?'
				/>
				<Form labelLocation='top' />
			</Editing>

			<Toolbar>
				<Item location='before' render={TitleLabel} />
				<Item
					name='groupPanel'
					visible='auto'
					locateInMenu='auto'
					location='after'
				/>
				<Item name='searchPanel' locateInMenu='auto' />
				<Item
					disabled={dataSource?.length === 0 ? true : false}
					name='exportButton'
					location='after'
					showText='auto'
					locateInMenu='auto'
					options={{
						text: 'Xuất excel',
					}}
				/>

				<Item
					options={{ elementAttr: { class: 'custom-button' } }}
					name='addRowButton'
					location='after'
					showText='auto'
					locateInMenu='auto'
				/>

				<Item
					name='deletePanel'
					location='after'
					locateInMenu='auto'
					disabled={listSelect.length === 0 ? true : false}
				>
					<Buttons
						icon='trash'
						type='danger'
						text='Xoá'
						className='delete-button'
						onClick={() => handleDelete()}
					/>
				</Item>
			</Toolbar>

			<Export
				enabled={true}
				texts={{
					exportAll: 'Xuất tất cả.',
					exportSelectedRows: 'Xuất các hàng đã chọn.',
				}}
				allowExportSelectedData={true}
			/>

			<Column dataField='name' caption='Họ và tên'>
				<RequiredRule message='Họ và tên là bắt buộc' />
			</Column>

			<Column dataField='gender' caption='Giới tính'>
				<RequiredRule message='Chọn giới tính' />
				<Lookup
					dataSource={genderOption}
					valueExpr='value'
					displayExpr='value'
					searchExpr='value'
				/>
			</Column>

			<Column
				dataField='dateofbirth'
				caption='Năm sinh'
				dataType='date'
				format='dd/MM/yyyy'
			>
				<RequiredRule message='Chọn ngày tháng năm sinh' />
			</Column>

			<Column dataField='email' caption='Email'>
				<RequiredRule message='Email là bắt buộc' />
				<PatternRule message='Email không hợp lệ' pattern={REGEX_KEY.email} />
			</Column>

			<Column dataField='phone' caption='Số điện thoại' dataType='number'>
				<RequiredRule message='Số điện thoại là bắt buộc' />
			</Column>

			<Column dataField='address' caption='Địa chỉ'>
				<RequiredRule message='Địa chỉ là bắt buộc' />
			</Column>

			<Column dataField='unit' caption='Đơn vị'>
				<RequiredRule message='Nhập đơn vị' />
			</Column>

			<Column dataField='faculty' caption='Khoa'>
				<RequiredRule message='Nhập khoa' />
			</Column>

			<Column dataField='degree' caption='Học vị'>
				<RequiredRule message='Nhập học vị' />
			</Column>

			<Column dataField='position' caption='Chức vụ'>
				<RequiredRule message='Nhập chức vụ' />
			</Column>

			<Column type='buttons' fixed={true} fixedPosition='right'>
				<Button name='edit' />
				<Button name='delete' />
			</Column>
		</DataGrid>
	);
}

export default TableDataGrid;
