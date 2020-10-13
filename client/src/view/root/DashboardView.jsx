import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import RootLayout from './CommonLayout';
import Path from './Path';

const DashboardView = ({t}) =>
	<RootLayout
		title='root.dashboard.title'
		selected={[Path.ROOT]}
		breadcrumbs={[
			{
				id: 'root.dashboard',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</RootLayout>
;

export default withTranslation()(DashboardView);
