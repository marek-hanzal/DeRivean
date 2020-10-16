import {FormOutlined, FundOutlined, HomeOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

const CreateView = ({t}) =>
	<CommonLayout
		title='root.player.create.title'
		menu={<MainMenu
			open={[Path.root]}
			selected={[Path.create]}
		/>}
		footer={<Footer/>}
		breadcrumbs={[
			{
				id: 'root.home',
				icon: <HomeOutlined/>,
				href: Path.root,
			},
			{
				id: Path.home,
				title: 'root.player.home.breadcrumb',
				href: Path.home,
				icon: <FundOutlined/>,
			},
			{
				id: Path.create,
				title: 'root.player.create.breadcrumb',
				icon: <FormOutlined/>,
			},
		]}
	>
	</CommonLayout>
;

export default withTranslation()(CreateView);
