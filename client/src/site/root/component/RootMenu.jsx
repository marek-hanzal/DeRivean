import {MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const RootMenu = ({t, ...props}) =>
	<Route exact={true} path={RootPath.root}>
		<BaseMenu {...props}>
			<Menu.Item key={PlayerPath.home} icon={<MehOutlined/>}>
				<Link to={PlayerPath.home}>{t("root.player.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={EntityPath.home} icon={<RobotOutlined/>}>
				<Link to={EntityPath.home}>{t("root.entity.menu")}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key='root.logout' icon={<PoweroffOutlined/>}>
				<Link to={RootPath.signOut}>{t("root.logout.menu")}</Link>
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default withTranslation()(RootMenu);
