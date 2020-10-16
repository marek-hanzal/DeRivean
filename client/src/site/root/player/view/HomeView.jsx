import React from 'react';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import PlayerPath from "../router/PlayerPath";

const HomeView = () =>
	<CommonLayout
		title='root.player.home.title'
		menu={<MainMenu
			open={[PlayerPath.root]}
			selected={[PlayerPath.home]}
		/>}
		footer={<Footer/>}
		// breadcrumbs={[
		// 	{
		// 		id: 'root.home',
		// 		icon: <HomeOutlined/>,
		// 		href: Path.root,
		// 	},
		// 	{
		// 		id: Path.home,
		// 		title: 'root.player.home.breadcrumb',
		// 		icon: <FundOutlined/>,
		// 	},
		// ]}
	>
	</CommonLayout>
;

export default HomeView;
