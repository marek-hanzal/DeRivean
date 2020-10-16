import React from 'react';
import {Route} from "react-router";
import Path from "../router/Path";
import {Menu} from "antd";
import {BookOutlined, FormOutlined, FundOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {default as PlayerPath} from "../player/router/Path";
import {default as EntityPath} from "../entity/router/Path";
import BaseMenu from "../../../component/BaseMenu";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";

const RootMenu = (
	{
		t,
		onLogout,
	}) =>
	<Route exact={true} path={Path.root}>
		<BaseMenu
			style={{
				minHeight: '100vh',
			}}
		>
			<Menu.Item key={Path.root}>
				<HomeOutlined/>
				<Link to={Path.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.SubMenu key={PlayerPath.root} title={<><BookOutlined/>{t('root.player.menu')}</>}>
				<Menu.Item key={PlayerPath.home}>
					<FundOutlined/>
					<Link to={PlayerPath.home}>{t('root.player.home.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={PlayerPath.create}>
					<FormOutlined/>
					<Link to={PlayerPath.create}>{t('root.player.create.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={PlayerPath.list}>
					<UnorderedListOutlined/>
					<Link to={PlayerPath.list}>{t('root.player.list.menu')}</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Divider/>
			<Menu.SubMenu key={EntityPath.root} title={<><BookOutlined/>{t('root.entity.menu')}</>}>
				<Menu.Item key={EntityPath.home}>
					<FundOutlined/>
					<Link to={EntityPath.home}>{t('root.entity.home.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={EntityPath.create}>
					<FormOutlined/>
					<Link to={EntityPath.create}>{t('root.entity.create.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={EntityPath.list}>
					<UnorderedListOutlined/>
					<Link to={EntityPath.list}>{t('root.entity.list.menu')}</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Divider/>
			<Menu.Item key='root.logout' onClick={() => onLogout()}>
				<PoweroffOutlined/>
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
