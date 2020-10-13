import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import InternalLayout from './InternalLayout';
import InternalPath from './InternalPath';

const DashboardView = ({t}) =>
	<InternalLayout
		title='internal.dashboard.title'
		selected={[InternalPath.ROOT]}
		breadcrumbs={[
			{
				id: 'internal.dashboard',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</InternalLayout>
;

export default withTranslation()(DashboardView);
