import {CrownOutlined, FormOutlined, HomeOutlined, MehOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import InternalMenu from "site/internal/component/InternalMenu";
import KingdomMenu from "site/internal/module/kingdom/component/KingdomMenu";
import KingdomHeroesPath from "site/internal/module/kingdom/module/heroes/router/KingdomHeroesPath";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import InternalPath from "site/internal/router/InternalPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
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
			items={[].concat(
				KingdomMenu(),
				InternalMenu(),
			)}
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
