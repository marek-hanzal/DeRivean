import Layout from "component/Layout";
import React from "react";
import InternalBreadcrumbs from "site/internal/component/InternalBreadcrumbs";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";

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
		menu={<MainMenu
			open={open}
			selected={selected}
		/>}
		breadcrumbs={<InternalBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default InternalView;
