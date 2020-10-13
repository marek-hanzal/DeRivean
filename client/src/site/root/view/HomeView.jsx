import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../component/CommonLayout';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';
import Path from '../router/Path';

const HomeView = ({t}) =>
	<CommonLayout
		title='root.home.title'
		menu={<MainMenu
			selected={[Path.root]}
		/>}
		footer={<Footer/>}
		breadcrumbs={[
			{
				id: 'root.home',
				icon: <HomeOutlined/>,
			}
		]}
	>
	</CommonLayout>
;

export default withTranslation()(HomeView);
