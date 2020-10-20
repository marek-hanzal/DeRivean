import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import BaseMenu from "component/BaseMenu";
import React from "react";
import {withTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";

const KingdomHeroesMenu = ({t, ...props}) => (
	<BaseMenu {...props}>
		<Menu.Item key={InternalPath.root} icon={<HomeOutlined/>}>
			<Link to={InternalPath.root}>{t("internal.home.menu")}</Link>
		</Menu.Item>
		<Menu.Item key={KingdomPath.home} icon={<CrownOutlined/>}>
			<Link to={KingdomPath.home}>{t("internal.kingdom.menu")}</Link>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item key={KingdomHeroesPath.home} icon={<MehOutlined/>}>
			<Link to={KingdomHeroesPath.home}>{t("internal.kingdom.heroes.home.menu")}</Link>
		</Menu.Item>
		<Menu.Item key={KingdomHeroesPath.list} icon={<UnorderedListOutlined/>}>
			<Link to={KingdomHeroesPath.list}>{t("internal.kingdom.heroes.list.menu")}</Link>
		</Menu.Item>
		<Menu.Item key={KingdomHeroesPath.create} icon={<FormOutlined/>}>
			<Link to={KingdomHeroesPath.create}>{t("internal.kingdom.heroes.create.menu")}</Link>
		</Menu.Item>
	</BaseMenu>)
;

export default withTranslation()(KingdomHeroesMenu);
