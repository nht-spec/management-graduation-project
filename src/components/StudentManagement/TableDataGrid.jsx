import DataGrid, {
	Button,
	Column,
	CustomRule,
	Editing,
	Export,
	FilterRow,
	Form,
	Grouping,
	Lookup,
	PatternRule,
	RequiredRule,
	SearchPanel,
	Selection,
	Texts,
	Toolbar,
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';
import React, { useEffect, useRef } from 'react';
import REGEX_KEY from '../../constants/regex-key';
import Buttons from '../Shared/Buttons';
import { dataForm } from './dataForm';

function TableDataGrid(props) {
	const {
		handleDelete,
		onSelectionChanged,
		dataSource,
		onRowInserting,
		onRowUpdating,
		onRowRemoving,
		onDetailClick,
		TitleLabel,
		validateStudent,
		onInitNewRow,
		onEditingStart,
		onExporting,
		listSelect,
		loading,
	} = props;

	const gridRef = useRef(null);

	useEffect(() => {
		if (loading) {
			gridRef.current.instance.beginCustomLoading();
		} else {
			gridRef.current.instance.endCustomLoading();
		}
	}, [loading]);

	return (
		<DataGrid
			showBorders={true}
			showRowLines={true}
			showColumnLines={true}
			columnAutoWidth={true}
			allowColumnReordering={true}
			ref={gridRef}
			noDataText='Không có dữ liệu'
			dataSource={dataSource}
			onRowInserting={onRowInserting}
			onRowUpdating={onRowUpdating}
			onRowRemoving={onRowRemoving}
			onSelectionChanged={onSelectionChanged}
			onInitNewRow={onInitNewRow}
			onEditingStart={onEditingStart}
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

			<Grouping autoExpandAll={true} />
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

			<Column dataField='mssv' caption='MSSV'>
				<RequiredRule message='Mã số sinh viên là bắt buộc' />
				<CustomRule
					validationCallback={validateStudent}
					message='Sinh viên đã tồn tại, thử lại!'
				/>
			</Column>
			<Column dataField='name' caption='Họ và tên'>
				<RequiredRule message='Họ và tên là bắt buộc' />
			</Column>
			<Column dataField='vntopic' caption='Tên đề tài tiếng việt'>
				<Lookup
					dataSource={dataForm[2].optionChoose}
					valueExpr='value'
					displayExpr='value'
					searchExpr='value'
				/>
			</Column>
			<Column dataField='entopic' caption='Tên đề tài tiếng anh'>
				<Lookup
					dataSource={dataForm[3].optionChoose}
					valueExpr='value'
					displayExpr='value'
					searchExpr='value'
				/>
			</Column>
			<Column dataField='instructor' caption='Giảng viên hướng dẫn'>
				<Lookup
					dataSource={dataForm[4].optionChoose}
					valueExpr='value'
					displayExpr='value'
					searchExpr='value'
				/>
			</Column>
			<Column caption='Thông tin liên lạc của sinh viên'>
				<Column dataField='email' caption='Email'>
					<PatternRule message='Email không hợp lệ' pattern={REGEX_KEY.email} />
				</Column>
				<Column dataField='phone' caption='Số điện thoại' alignment='center' />
			</Column>
			<Column
				dataField='samestudentwork'
				caption='STT sinh viên làm cùng đề tài'
			/>
			<Column dataField='note' caption='Ghi chú' />

			<Column type='buttons' fixed={true} fixedPosition='right'>
				<Button name='edit' />
				<Button name='delete' />
				<Button icon='overflow' onClick={onDetailClick} />
			</Column>
		</DataGrid>
	);
}

export default TableDataGrid;
