import {FundOutlined, HomeOutlined, UnorderedListOutlined} from '@ant-design/icons';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import CommonLayout from '../../../../component/CommonLayout';
import {onPlayerPages} from '../../../../redux/player/pages/payload/action';
import Footer from '../../component/Footer';
import MainMenu from '../../component/MainMenu';
import Path from '../../router/Path';

const ListView = (
	{
		onPlayerPages,
		t,
	}) =>
	<CommonLayout
		title='root.player.list.title'
		menu={<MainMenu
			open={[Path.player.root]}
			selected={[Path.player.list]}
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
				href: Path.player.home,
				icon: <FundOutlined/>,
			},
			{
				id: Path.player.list,
				title: 'root.player.list.breadcrumb',
				icon: <UnorderedListOutlined/>,
			},
		]}
	>
		{onPlayerPages('href')}
	</CommonLayout>
;

export default connect(
	state => ({}),
	dispatch => ({
		onPlayerPages: href => dispatch(onPlayerPages(href)),
	})
)(withTranslation()(ListView));
