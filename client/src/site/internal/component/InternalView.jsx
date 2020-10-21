import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import InternalBreadcrumbs from "site/internal/component/InternalBreadcrumbs";
import InternalMenu from "site/internal/component/InternalMenu";
import KingdomBreadcrumbs from "site/internal/module/kingdom/component/KingdomBreadcrumbs";
import KingdomMenu from "site/internal/module/kingdom/component/KingdomMenu";
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
			items={[].concat(
				KingdomBreadcrumbs(),
				InternalBreadcrumbs(),
			)}
		/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default InternalView;
