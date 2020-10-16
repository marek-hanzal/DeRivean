import {
	FormOutlined,
	FundOutlined,
	HomeOutlined
} from '@ant-design/icons';
import React from 'react';
import { withTranslation } from 'react-i18next';
import CommonLayout from '../../../../component/CommonLayout';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

const CreateView = ({t}) =>
	<CommonLayout
		title='root.entity.create.title'
		menu={<MainMenu
			open={[Path.entity.root]}
			selected={[Path.entity.create]}
		/>}
		footer={<Footer/>}
		breadcrumbs={[
			{
				id: 'root.home',
				icon: <HomeOutlined/>,
				href: Path.root,
			},
			{
				id: Path.entity.home,
				title: 'root.entity.home.breadcrumb',
				href: Path.entity.home,
				icon: <FundOutlined/>,
			},
			{
				id: Path.entity.create,
				title: 'root.entity.create.breadcrumb',
				icon: <FormOutlined/>,
			},
		]}
	>
	</CommonLayout>
;

export default withTranslation()(CreateView);
