import React from 'react';
import {Route} from "react-router";
import Path from "../router/Path";
import {Menu} from "antd";
import {FormOutlined, FundOutlined, HomeOutlined, MehOutlined, PoweroffOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
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
		<BaseMenu>
			<Menu.Item key={Path.root} icon={<HomeOutlined/>}>
				<Link to={Path.root}>{t('root.home.menu')}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.SubMenu key={PlayerPath.root} icon={<MehOutlined/>} title={t('root.player.menu')}>
				<Menu.Item key={PlayerPath.home} icon={<FundOutlined/>}>
					<Link to={PlayerPath.home}>{t('root.player.home.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={PlayerPath.create} icon={<FormOutlined/>}>
					<Link to={PlayerPath.create}>{t('root.player.create.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={PlayerPath.list} icon={<UnorderedListOutlined/>}>
					<Link to={PlayerPath.list}>{t('root.player.list.menu')}</Link>
				</Menu.Item>
			</Menu.SubMenu>
			<Menu.Divider/>
			<Menu.SubMenu key={EntityPath.root} icon={<RobotOutlined/>} title={t('root.entity.menu')}>
				<Menu.Item key={EntityPath.home} icon={<FundOutlined/>}>
					<Link to={EntityPath.home}>{t('root.entity.home.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={EntityPath.create} icon={<FormOutlined/>}>
					<Link to={EntityPath.create}>{t('root.entity.create.menu')}</Link>
				</Menu.Item>
				<Menu.Item key={EntityPath.list} icon={<UnorderedListOutlined/>}>
					<Link to={EntityPath.list}>{t('root.entity.list.menu')}</Link>
				</Menu.Item>
			</Menu.SubMenu>
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
