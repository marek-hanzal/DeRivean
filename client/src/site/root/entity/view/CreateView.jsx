import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import EntityPath from "../router/EntityPath";

const CreateView = ({t}) =>
	<CommonLayout
		title='root.entity.create.title'
		menu={<MainMenu
			open={[EntityPath.root]}
			selected={[EntityPath.create]}
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
		// 		href: Path.home,
		// 		icon: <FundOutlined/>,
		// 	},
		// 	{
		// 		id: Path.create,
		// 		title: 'root.entity.create.breadcrumb',
		// 		icon: <FormOutlined/>,
		// 	},
		// ]}
	>
	</CommonLayout>
;

export default withTranslation()(CreateView);
