import React from 'react';
import { Route } from 'react-router-dom';

export default function PublicRoute(props) {
	const { path, exact, component } = props;

	return (
		<Route
			path={path}
			exact={exact}
			component={component}
			// {...rest}
		/>
	);
}
