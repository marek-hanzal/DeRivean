import MainMenu from "./MainMenu";
import RootBreadcrumbs from "./RootBreadcrumbs";
import Footer from "./Footer";
import CommonLayout from "../../../component/CommonLayout";
import React from "react";
import Header from "./Header";

const RootView = (
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
		breadcrumbs={<RootBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default RootView;
