import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route } from 'react-router-dom';

export default function PrivateRoute(props) {
	const {
		component: InnerComponent,
		docTitle,
		layout: Layout,
		location: { pathname },
		...rest
	} = props;

	return (
		<Route
			{...rest}
			render={(props) => (
				<>
					<HelmetProvider>
						<Helmet>
							<title>{docTitle}</title>
						</Helmet>
					</HelmetProvider>

					<Layout>
						<InnerComponent {...props} />
					</Layout>
				</>
			)}
		/>
	);
}
