import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../component/CommonLayout';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';

const HomeView = ({t}) =>
	<CommonLayout
		title='internal.home.title'
		menu={<MainMenu/>}
		footer={<Footer/>}
		// breadcrumbs={[
		// 	{
		// 		id: 'internal.home',
		// 		icon: <HomeOutlined/>,
		// 	}
		// ]}
	>
	</CommonLayout>
;

export default withTranslation()(HomeView);
