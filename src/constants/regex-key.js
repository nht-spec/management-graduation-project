const REGEX_KEY = {
	email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	onlyNumber: /^\d+$/,
	onlyCharacter: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
	date: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
};
export default REGEX_KEY;
