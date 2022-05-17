import MESSAGE from '../../constants/message-key';
import REGEX_KEY from '../../constants/regex-key';

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
			'Website bán quần áo',
			'Website đặt vé xem phim',
			'App quản lí chi tiêu',
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
			'Website sell clothes',
			'Website Cinema ticket booking',
			'Expense Management App',
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
			'ThS. Bùi Thanh Bình',
			'TS. Lê Kim Hùng',
			'ThS. Trần Hồng Nghi',
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