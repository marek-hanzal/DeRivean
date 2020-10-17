import {FormOutlined, FundOutlined, HomeOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import PlayerPath from "site/root/player/router/PlayerPath";
import RootPath from "site/root/router/RootPath";

const PlayerMenu = ({t, ...props}) =>
	<Route path={PlayerPath.root}>
		<BaseMenu {...props}>
			<Menu.Item key={RootPath.root} icon={<HomeOutlined/>}>
				<Link to={RootPath.root}>{t("root.home.menu")}</Link>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item key={PlayerPath.home} icon={<FundOutlined/>}>
				<Link to={PlayerPath.home}>{t("root.player.home.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={PlayerPath.list} icon={<UnorderedListOutlined/>}>
				<Link to={PlayerPath.list}>{t("root.player.list.menu")}</Link>
			</Menu.Item>
			<Menu.Item key={PlayerPath.create} icon={<FormOutlined/>}>
				<Link to={PlayerPath.create}>{t("root.player.create.menu")}</Link>
			</Menu.Item>
		</BaseMenu>
	</Route>
;

export default withTranslation()(PlayerMenu);
