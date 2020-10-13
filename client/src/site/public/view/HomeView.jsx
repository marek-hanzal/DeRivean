import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../component/CommonLayout';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';
import Path from '../router/Path';

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
