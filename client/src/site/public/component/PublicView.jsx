import CommonLayout from "component/CommonLayout";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";
import PublicBreadcrumbs from "./PublicBreadcrumbs";

const PublicView = (
	{
		title,
		subtitle,
		open,
		selected,
		children,
	}) =>
	<CommonLayout
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
