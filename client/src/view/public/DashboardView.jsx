import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import PublicLayout from './PublicLayout';
import PublicPath from './PublicPath';

const DashboardView = ({t}) =>
	<PublicLayout
		title='public.dashboard.title'
		selected={[PublicPath.ROOT]}
		breadcrumbs={[
			{
				id: 'public.dashboard',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</PublicLayout>
;

export default withTranslation()(DashboardView);
