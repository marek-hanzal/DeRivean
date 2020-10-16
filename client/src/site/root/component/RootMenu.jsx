import React from 'react';
import {Route} from "react-router";
import Path from "../router/Path";
import {Menu} from "antd";
import {HomeOutlined, MehOutlined, PoweroffOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {default as PlayerPath} from "../player/router/Path";
import BaseMenu from "../../../component/BaseMenu";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";

const RootMenu = (
	{
		t,
		onLogout,
	}) =>
	<Route exact={true} path={Path.root}>
		<BaseMenu>
			<Menu.Item key={Path.root} icon={<HomeOutlined/>}>
				<Link to={Path.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key={PlayerPath.root} icon={<MehOutlined/>}>
				<Link to={PlayerPath.root}>{t('root.player.menu')}</Link>
			</Menu.Item>
			{/*<Menu.SubMenu key={EntityPath.root} icon={<RobotOutlined/>} title={t('root.entity.menu')}>*/}
			{/*	<Menu.Item key={EntityPath.home} icon={<FundOutlined/>}>*/}
			{/*		<Link to={EntityPath.home}>{t('root.entity.home.menu')}</Link>*/}
			{/*	</Menu.Item>*/}
			{/*	<Menu.Item key={EntityPath.create} icon={<FormOutlined/>}>*/}
			{/*		<Link to={EntityPath.create}>{t('root.entity.create.menu')}</Link>*/}
			{/*	</Menu.Item>*/}
			{/*	<Menu.Item key={EntityPath.list} icon={<UnorderedListOutlined/>}>*/}
			{/*		<Link to={EntityPath.list}>{t('root.entity.list.menu')}</Link>*/}
			{/*	</Menu.Item>*/}
			{/*</Menu.SubMenu>*/}
			<Menu.Divider/>
			<Menu.Item key='root.logout' onClick={() => onLogout()} icon={<PoweroffOutlined/>}>
				{t('root.logout.menu')}
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => {
			alert('logout');
		}
	}),
)(withTranslation()(RootMenu));
