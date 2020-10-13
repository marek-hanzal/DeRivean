import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../component/common/CommonLayout';
import Footer from '../../component/public/Footer';
import MainMenu from '../../component/public/MainMenu';
import Path from '../../router/public/Path';

const HomeView = ({t}) =>
	<CommonLayout
		title='public.home.title'
		menu={<MainMenu/>}
		footer={<Footer/>}
		selected={[Path.ROOT]}
		breadcrumbs={[
			{
				id: 'public.home',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</CommonLayout>
;

export default withTranslation()(HomeView);
