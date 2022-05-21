import MESSAGE from '../../constants/message-key';
import REGEX_KEY from '../../constants/regex-key';

export const detailStudent = (e) => {
	const data = [
		{ name: `${e.key.mssv}`, value: `${e.key.mssv}`, title: 'MSSV' },

		{ name: `${e.key.name}`, value: `${e.key.name}`, title: 'Họ và tên' },
		{
			name: `${e.key.vntopic}`,
			value: `${e.key.vntopic}`,
			title: 'Tên đề tài tiếng việt',
		},
		{
			name: `${e.key.entopic}`,
			value: `${e.key.entopic}`,
			title: 'Tên đề tài tiếng anh',
		},
		{
			name: `${e.key.instructor}`,
			value: `${e.key.instructor}`,
			title: 'Giảng viên hướng dẫn',
		},
		{ name: `${e.key.email}`, value: `${e.key.email}`, title: 'Email' },
		{
			name: `${e.key.phone}`,
			value: `${e.key.phone}`,
			title: 'Số điện thoại',
		},
		{
			name: `${e.key.samestudentwork}`,
			value: `${e.key.samestudentwork}`,
			title: 'STT sinh viên làm cùng đề tài',
		},

		{
			name: `${e.key?.note}`,
			value: `${e.key?.note}`,
			title: 'Ghi chú',
		},
	];

	return data;
};

export const dataForm = [
	{
		id: '1',
		name: 'mssv',
		title: 'MSSV',
		placeholder: MESSAGE.PLACEHOLDER.mssv,
		required: true,
		messageRequired: MESSAGE.REQUIRE.mssv,
		regex: REGEX_KEY.onlyNumber,
		messagePattern: MESSAGE.PATTERN.mssv,
	},
	{
		id: '2',
		name: 'name',
		title: 'Họ và tên',
		placeholder: MESSAGE.PLACEHOLDER.name,
		required: true,
		messageRequired: MESSAGE.REQUIRE.name,
		regex: REGEX_KEY.onlyCharacter,
		messagePattern: MESSAGE.PATTERN.name,
	},
	{
		id: '3',
		name: 'vntopic',
		title: 'Tên đề tài tiếng việt',
		placeholder: MESSAGE.PLACEHOLDER.vntopic,
		optionChoose: [
			{
				id: 1,
				value: 'Website bán quần áo',
			},
			{
				id: 2,
				value: 'Website đặt vé xem phim',
			},
			{
				id: 3,
				value: 'App quản lí chi tiêu',
			},
		],
		required: false,
		messageRequired: '',
		regex: '',
		messagePattern: '',
	},
	{
		id: '4',
		name: 'entopic',
		placeholder: MESSAGE.PLACEHOLDER.entopic,
		title: 'Tên đề tài tiếng anh',
		optionChoose: [
			{
				id: 1,
				value: 'Website sell clothes',
			},
			{
				id: 2,
				value: 'Website Cinema ticket booking',
			},
			{
				id: 3,
				value: 'Expense Management App',
			},
		],
		required: false,
		messageRequired: '',
		regex: '',
		messagePattern: '',
	},
	{
		id: '5',
		name: 'instructor',
		title: 'Giảng viên hướng dẫn',
		placeholder: MESSAGE.PLACEHOLDER.instructor,
		optionChoose: [
			{
				id: 1,
				value: 'ThS. Bùi Thanh Bình',
			},
			{
				id: 2,
				value: 'TS. Lê Kim Hùng',
			},
			{
				id: 3,
				value: 'ThS. Trần Hồng Nghi',
			},
		],
		required: false,
		messageRequired: '',
		regex: '',
		messagePattern: '',
	},
	{
		id: '6',
		name: 'email',
		title: 'Email',
		placeholder: MESSAGE.PLACEHOLDER.email,
		required: false,
		messageRequired: '',
		regex: REGEX_KEY.email,
		messagePattern: MESSAGE.PATTERN.email,
	},
	{
		id: '7',
		name: 'phone',
		title: 'Số điện thoại',
		placeholder: MESSAGE.PLACEHOLDER.phone,
		required: false,
		messageRequired: '',
		regex: REGEX_KEY.onlyNumber,
		messagePattern: MESSAGE.PATTERN.phone,
	},
	{
		id: '8',
		name: 'samestudentwork',
		title: 'Stt sinh viên làm cùng đề tài',
		placeholder: MESSAGE.PLACEHOLDER.samestudentwork,
		required: false,
		messageRequired: '',
		regex: '',
		messagePattern: '',
	},
	{
		id: '9',
		name: 'note',
		title: 'Ghi chú',
		placeholder: MESSAGE.PLACEHOLDER.note,
		required: false,
		messageRequired: '',
		regex: '',
		messagePattern: '',
	},
];

export const dataFormAddClass = {
	id: 1,
	name: 'addclass',
	title: 'Mã lớp',
	placeholder: MESSAGE.PLACEHOLDER.addclass,
	required: true,
	messageRequired: MESSAGE.REQUIRE.addclass,
	regex: '',
	messagePattern: '',
};
