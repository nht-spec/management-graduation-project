import MESSAGE from '../../constants/message-key';
import REGEX_KEY from '../../constants/regex-key';

export const inputData = [
	{
		id: 1,
		name: 'email',
		title: 'Email address',
		placeholder: MESSAGE.PLACEHOLDER.email,
		required: true,
		requiredErr: MESSAGE.REQUIRE.email,
		regex: REGEX_KEY.email,
		patternErr: MESSAGE.PATTERN.email,
	},

	{
		id: 2,
		name: 'password',
		title: 'Password',
		placeholder: MESSAGE.PLACEHOLDER.password,
		required: true,
		requiredErr: MESSAGE.REQUIRE.password,
		regex: null,
		patternErr: null,
	},
];
