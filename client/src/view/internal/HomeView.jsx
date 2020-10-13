import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../component/common/CommonLayout';
import Footer from '../../component/internal/Footer';
import MainMenu from '../../component/internal/MainMenu';
import Path from '../../router/internal/Path';

const HomeView = ({t}) =>
	<CommonLayout
		title='internal.home.title'
		menu={<MainMenu/>}
		footer={<Footer/>}
		selected={[Path.ROOT]}
		breadcrumbs={[
			{
				id: 'internal.home',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</CommonLayout>
;

export default withTranslation()(HomeView);
