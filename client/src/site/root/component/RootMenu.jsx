import {MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const RootMenu = (
	{
		t,
		onLogout,
		...props
	}) =>
	<Route exact={true} path={RootPath.root}>
		<BaseMenu {...props}>
			<Menu.Item key={PlayerPath.home} icon={<MehOutlined/>}>
				<Link to={PlayerPath.home}>{t("root.player.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.home} icon={<RobotOutlined/>}>
				<Link to={EntityPath.home}>{t("root.entity.menu")}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key='root.logout' onClick={() => onLogout()} icon={<PoweroffOutlined/>}>
				{t("root.logout.menu")}
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => alert("logout")
	}),
)(withTranslation()(RootMenu));
