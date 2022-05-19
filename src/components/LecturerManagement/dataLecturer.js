export const detailLecturer = (e) => {
	const data = [
		{ name: `${e.key.name}`, value: `${e.key.name}`, title: 'Họ và tên' },
		{ name: `${e.key.gender}`, value: `${e.key.gender}`, title: 'Giới tính' },
		{
			name: `${e.key.dateofbirth}`,
			value: `${e.key.dateofbirth}`,
			title: 'Năm sinh',
		},
		{ name: `${e.key.email}`, value: `${e.key.email}`, title: 'Email' },
		{
			name: `${e.key.phone}`,
			value: `${e.key.phone}`,
			title: 'Số điện thoại',
		},
		{ name: `${e.key.address}`, value: `${e.key.address}`, title: 'Địa chỉ' },
		{ name: `${e.key.unit}`, value: `${e.key.unit}`, title: 'Đơn vị' },
		{ name: `${e.key.faculty}`, value: `${e.key.faculty}`, title: 'Khoa' },
		{ name: `${e.key.degree}`, value: `${e.key.degree}`, title: 'Học vị' },
		{
			name: `${e.key.position}`,
			value: `${e.key.position}`,
			title: 'Chức vụ',
		},
	];

	return data;
};

export const genderOption = [
	{
		id: 1,
		value: 'Nam',
	},
	{
		id: 2,
		value: 'Nữ',
	},
	{
		id: 3,
		value: 'Khác',
	},
];
