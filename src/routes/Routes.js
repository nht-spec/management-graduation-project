import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import LoginContainer from '../containers/Auth/LoginContainer';

import BlankLayout from '../layouts/BlankLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.jsx';
//Add view
import dashboardRoutes from './route-sets/dashboard';
import demoRoutes from './route-sets/demo';
import studentmanagementRoutes from './route-sets/studentmanagement';
import lecturermanagementRoutes from './route-sets/lecturermanagement';
import timeregisterspecializedRoutes from './route-sets/timeregisterspecialized';

const AuthenticatedLayout = loadable(() =>
	import('../layouts/AuthenticatedLayout')
);

const BackGroundLayout = loadable(() => import('../layouts/BackGroundLayout'));

const Exception404 = loadable(() => import('../components/Exception/404'));

const Routes = () => {
	const privateRoutes = [
		...dashboardRoutes,
		...demoRoutes,
		...studentmanagementRoutes,
		...lecturermanagementRoutes,
		...timeregisterspecializedRoutes,
	];

	return (
		<Switch>
			<Route exact path='/' render={() => <Redirect to='/login' />} />
			<PublicRoute
				exact
				path='/login'
				docTitle='Đăng nhập'
				component={LoginContainer}
			/>
			{privateRoutes.map((r) => (
				<PrivateRoute
					exact
					path={r.path}
					layout={AuthenticatedLayout}
					component={r.component}
					docTitle={r.title}
				/>
			))}
			<PublicRoute
				layout={BlankLayout}
				path='*'
				component={Exception404}
				docTitle='404 - Not Found'
			/>
		</Switch>
	);
};

export default withRouter(Routes);
