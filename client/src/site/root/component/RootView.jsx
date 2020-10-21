import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import RootBreadcrumbs from "site/root/component/RootBreadcrumbs";
import RootMenu from "site/root/component/RootMenu";
import EntityBreadcrumbs from "site/root/module/entity/component/EntityBreadcrumbs";
import EntityMenu from "site/root/module/entity/component/EntityMenu";
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
				EntityMenu(),
				RootMenu(),
			)}
		/>}
		breadcrumbs={<Breadcrumbs
			items={[].concat(
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
