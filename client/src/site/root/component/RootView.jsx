import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import RootBreadcrumbs from "site/root/component/RootBreadcrumbs";
import RootMenu from "site/root/component/RootMenu";
import EntityBreadcrumbs from "site/root/module/entity/component/EntityBreadcrumbs";
import EntityMenu from "site/root/module/entity/component/EntityMenu";
import UserBreadcrumbs from "site/root/module/user/component/UserBreadcrumbs";
import UserMenu from "site/root/module/user/component/UserMenu";
import Footer from "./Footer";
import Header from "./Header";

const RootView = (
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
				UserMenu(),
				EntityMenu(),
				RootMenu(),
			)}
		/>}
		breadcrumbs={<Breadcrumbs
			items={[].concat(
				UserBreadcrumbs(),
				EntityBreadcrumbs(),
				RootBreadcrumbs(),
			)}
		/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default RootView;
