import React from 'react';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import EntityPath from "../router/EntityPath";

const HomeView = () =>
	<CommonLayout
		title='root.entity.home.title'
		menu={<MainMenu
			open={[EntityPath.root]}
			selected={[EntityPath.home]}
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
		// 		title: 'root.entity.home.breadcrumb',
		// 		icon: <FundOutlined/>,
		// 	},
		// ]}
	>
	</CommonLayout>
;

export default HomeView
