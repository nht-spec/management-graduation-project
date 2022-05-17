import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import getNameMap from '../../utils/breadcrumb';

const Breadcrumb = loadable(() => import('../../components/Shared/Breadcrumb'));

class BreadcrumbContainer extends Component {
	static defaultProps = {
		breadcrumbEntityDisplay: null,
	};

	render() {
		const {
			location: { pathname },
			match: {
				params: { id },
			},
			breadcrumbEntityDisplay,
		} = this.props;

		const breadcrumbNameMap = getNameMap(id, breadcrumbEntityDisplay);
		const pathSnippets = pathname.split('/').filter((i) => i);
		return (
			<Breadcrumb
				pathSnippets={pathSnippets}
				breadcrumbNameMap={breadcrumbNameMap}
			/>
		);
	}
}

export default withRouter(BreadcrumbContainer);
