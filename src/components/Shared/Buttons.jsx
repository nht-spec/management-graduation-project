import React from 'react';
import { Button } from 'devextreme-react/button';

function Buttons(props) {
	const { icon, type, text, onClick, className } = props;
	return (
		<Button
			className={className}
			icon={icon}
			type={type}
			text={text}
			onClick={onClick}
		/>
	);
}

export default Buttons;
