import {CrownOutlined, HomeOutlined, PoweroffOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const InternalMenu = ({t, ...props}) =>
	<BaseMenu {...props}>
		<Menu.Item key={InternalPath.root} icon={<HomeOutlined/>}>
			<Link to={InternalPath.root}>{t("internal.home.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key={KingdomPath.home} icon={<CrownOutlined/>}>
			<Link to={KingdomPath.home}>{t("internal.kingdom.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key='internal.logout' icon={<PoweroffOutlined/>}>
			<Link to={InternalPath.signOut}>{t("internal.sign-out.menu")}</Link>
		</Menu.Item>
	</BaseMenu>
;

export default withTranslation()(InternalMenu);