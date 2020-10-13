import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../component/common/CommonLayout';
import MainMenu from '../root/MainMenu';
import Footer from './Footer';
import Path from './Path';

const DashboardView = ({t}) =>
	<CommonLayout
		title='internal.dashboard.title'
		menu={<MainMenu/>}
		footer={<Footer/>}
		selected={[Path.ROOT]}
		breadcrumbs={[
			{
				id: 'internal.dashboard',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</CommonLayout>
;

export default withTranslation()(DashboardView);
