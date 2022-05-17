import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function PublicRoute(props) {
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

					{Layout && (
						<Layout>
							<InnerComponent {...props} />
						</Layout>
					)}
					{!Layout && <InnerComponent {...props} />}
				</>
			)}
		/>
	);
}
