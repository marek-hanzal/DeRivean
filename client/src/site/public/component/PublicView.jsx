import Layout from "component/Layout";
import React from "react";
import Footer from "site/public/component/Footer";
import Header from "site/public/component/Header";
import MainMenu from "site/public/component/MainMenu";
import PublicBreadcrumbs from "site/public/component/PublicBreadcrumbs";

const PublicView = (
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
		breadcrumbs={<PublicBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default PublicView;
