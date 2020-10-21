import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import InternalBreadcrumbs from "site/internal/component/InternalBreadcrumbs";
import KingdomHeroesPath from "site/internal/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import Footer from "./Footer";
import Header from "./Header";

const InternalView = (
	{
		title,
		subtitle,
		open,
		selected,
		children,
	}) =>
	<Layout
		title={title}
		subtitle={subtitle}
		menu={<Menu
			open={open}
			selected={selected}
			items={[
				menu(KingdomHeroesPath.root, [
					menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
					menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
					menuDivider(),
					menuItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
					menuItem(KingdomHeroesPath.create, "internal.kingdom.heroes.create", <FormOutlined/>),
					menuItem(KingdomHeroesPath.list, "internal.kingdom.heroes.list", <UnorderedListOutlined/>),
					menuDivider(),
					menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
				]),
				menu(KingdomPath.root, [
					menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
					menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
					menuItem(KingdomHeroesPath.home, "internal.kingdom.heroes", <MehOutlined/>),
					menuDivider(),
					menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
				]),
				menu(InternalPath.root, [
					menuItem(InternalPath.root, "internal.home", <HomeOutlined/>),
					menuItem(KingdomPath.home, "internal.kingdom", <CrownOutlined/>),
					menuDivider(),
					menuItem(InternalPath.signOut, "internal.sign-out", <PoweroffOutlined/>),
				]),
			]}
		/>}
		breadcrumbs={<InternalBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default InternalView;
