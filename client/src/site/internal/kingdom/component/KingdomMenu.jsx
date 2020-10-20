import {HomeOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const KingdomMenu = ({t, ...props}) =>
	<Route path={KingdomPath.root}>
		<BaseMenu {...props}>
			<Menu.Item key={InternalPath.root} icon={<HomeOutlined/>}>
				<Link to={InternalPath.root}>{t("internal.home.menu")}</Link>
			</Menu.Item>
			<Menu.Divider/>
		</BaseMenu>
	</Route>
;

export default withTranslation()(KingdomMenu);
