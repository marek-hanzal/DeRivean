import {MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const RootMenu = ({t, ...props}) =>
	<BaseMenu {...props}>
		<Menu.Item key={PlayerPath.home} icon={<MehOutlined/>}>
			<Link to={PlayerPath.home}>{t("root.player.menu")}</Link>
		</Menu.Item>
		<Menu.Item key={EntityPath.home} icon={<RobotOutlined/>}>
			<Link to={EntityPath.home}>{t("root.entity.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key='root.sign-out' icon={<PoweroffOutlined/>}>
			<Link to={RootPath.signOut}>{t("root.sign-out.menu")}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default withTranslation()(RootMenu);
