import {HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../component/common/CommonLayout';
import Footer from '../../component/root/Footer';
import MainMenu from '../../component/root/MainMenu';
import Path from '../../router/root/Path';

const HomeView = ({t}) =>
	<CommonLayout
		title='root.home.title'
		menu={<MainMenu
			selected={[Path.ROOT]}
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
