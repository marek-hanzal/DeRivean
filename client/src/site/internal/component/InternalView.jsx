import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import KingdomHeroesPath from "site/internal/module/kingdom/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
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
		breadcrumbs={<Breadcrumbs
			items={[
				breadcrumbs(KingdomHeroesPath.create, [
					breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
					breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
					breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
					breadcrumbItem(KingdomHeroesPath.create, "internal.kingdom.heroes.create", <FormOutlined/>),
				]),
				breadcrumbs(KingdomHeroesPath.list, [
					breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
					breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
					breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
					breadcrumbItem(KingdomHeroesPath.list, "internal.kingdom.heroes.list", <UnorderedListOutlined/>),
				]),
				breadcrumbs(KingdomHeroesPath.root, [
					breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
					breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
					breadcrumbItem(KingdomHeroesPath.home, "internal.kingdom.heroes.home", <MehOutlined/>),
				]),
				breadcrumbs(KingdomPath.root, [
					breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
					breadcrumbItem(KingdomPath.home, "internal.kingdom.home", <CrownOutlined/>),
				]),
				breadcrumbs(InternalPath.root, [
					breadcrumbSimpleItem(InternalPath.root, <HomeOutlined/>),
				]),
			]}
		/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default InternalView;
