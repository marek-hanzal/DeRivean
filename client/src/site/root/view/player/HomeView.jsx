import {FundOutlined, HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

const HomeView = ({t}) =>
	<CommonLayout
		title='root.player.home.title'
		menu={<MainMenu
			open={[Path.player.root]}
			selected={[Path.player.home]}
		/>}
		footer={<Footer/>}
		breadcrumbs={[
			{
				id: 'root.home',
				icon: <HomeOutlined/>,
				href: Path.root,
			},
			{
				id: Path.player.home,
				title: 'root.player.home.breadcrumb',
				icon: <FundOutlined/>,
			},
		]}
	>
	</CommonLayout>
;

export default withTranslation()(HomeView);
