import {BookOutlined, FormOutlined, FundOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import BaseMenu from '../../../component/BaseMenu';
import Path from '../router/Path';

const MainMenu = (
	{
		open = [],
		selected = [],
		onLogout,
		t,
	}) =>
	<BaseMenu
		open={open}
		selected={selected}
		style={{
			height: '100vh',
		}}
	>
		<Menu.Item key={Path.root}>
			<HomeOutlined/>
			<Link to={Path.root}>{t('root.home.menu')}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.SubMenu key={Path.player.root} title={<><BookOutlined/>{t('root.player.menu')}</>}>
			<Menu.Item key={Path.player.home}>
				<FundOutlined/>
				<Link to={Path.player.home}>{t('root.player.home.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={Path.player.create}>
				<FormOutlined/>
				<Link to={Path.player.create}>{t('root.player.create.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={Path.player.list}>
				<UnorderedListOutlined/>
				<Link to={Path.player.list}>{t('root.player.list.menu')}</Link>
			</Menu.Item>
		</Menu.SubMenu>
		<Menu.Divider/>
		<Menu.SubMenu key={Path.entity.root} title={<><BookOutlined/>{t('root.entity.menu')}</>}>
			<Menu.Item key={Path.entity.home}>
				<FundOutlined/>
				<Link to={Path.entity.home}>{t('root.entity.home.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={Path.entity.create}>
				<FormOutlined/>
				<Link to={Path.entity.create}>{t('root.entity.create.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={Path.entity.list}>
				<UnorderedListOutlined/>
				<Link to={Path.entity.list}>{t('root.entity.list.menu')}</Link>
			</Menu.Item>
		</Menu.SubMenu>
		<Menu.Divider/>
		<Menu.Item key='root.logout' onClick={() => onLogout()}>
			<PoweroffOutlined/>
			{t('root.logout.menu')}
		</Menu.Item>
	</BaseMenu>
;

export default connect(
	state => ({}),
	dispatch => ({})
)(withTranslation()(MainMenu));
