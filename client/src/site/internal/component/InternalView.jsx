import CommonLayout from "../../../component/CommonLayout";
import React from "react";
import MainMenu from "./MainMenu";
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
	<CommonLayout
		title={title}
		subtitle={subtitle}
		menu={<MainMenu
			open={open}
			selected={selected}
		/>}
		// breadcrumbs={<PublicBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default InternalView;
