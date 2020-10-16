import React from 'react';
import {Route} from "react-router";
import RootPath from "../router/RootPath";
import {Menu} from "antd";
import {MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import BaseMenu from "../../../component/BaseMenu";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import PlayerPath from "../player/router/PlayerPath";
import EntityPath from "../entity/router/EntityPath";

const RootMenu = (
	{
		t,
		onLogout,
	}) =>
	<Route exact={true} path={RootPath.root}>
		<BaseMenu>
			<Menu.Item key={PlayerPath.home} icon={<MehOutlined/>}>
				<Link to={PlayerPath.home}>{t('root.player.menu')}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.home} icon={<RobotOutlined/>}>
				<Link to={EntityPath.home}>{t('root.entity.menu')}</Link>
			</Menu.Item>
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
		onLogout: () => alert('logout')
	}),
)(withTranslation()(RootMenu));
