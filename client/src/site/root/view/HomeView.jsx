import React from 'react';
import CommonLayout from '../../../component/CommonLayout';
import Footer from '../component/Footer';
import MainMenu from '../component/MainMenu';
import RootPath from "../router/RootPath";

const HomeView = () =>
	<CommonLayout
		title='root.home.title'
		menu={<MainMenu
			selected={[RootPath.root]}
		/>}
		footer={<Footer/>}
		// breadcrumbs={[
		// 	{
		// 		id: 'root.home',
		// 		icon: <HomeOutlined/>,
		// 	}
		// ]}
	>
	</CommonLayout>
;

export default HomeView;
