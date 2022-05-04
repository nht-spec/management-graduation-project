import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import LoginContainer from '../containers/Auth/LoginContainer';
import loadable from '@loadable/component';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.jsx';

//Add view
import dashboardRoutes from './route-sets/dashboard';
import demoRoutes from './route-sets/demo';

const AuthenticatedLayout = loadable(() =>
	import('../layouts/AuthenticatedLayout')
);

const Routes = () => {
	const privateRoutes = [...dashboardRoutes, ...demoRoutes];

	return (
		<Switch>
			<Route exact path='/' render={() => <Redirect to='/login' />} />
			<PublicRoute exact path='/login' component={LoginContainer} />
			{privateRoutes.map((r) => (
				<PrivateRoute
					exact
					path={r.path}
					layout={AuthenticatedLayout}
					component={r.component}
					docTitle={r.title}
				/>
			))}
		</Switch>
	);
};

export default withRouter(Routes);
