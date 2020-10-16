import CommonLayout from "../../../component/CommonLayout";
import React from "react";
import MainMenu from "./MainMenu";
import PublicBreadcrumbs from "./PublicBreadcrumbs";
import Footer from "./Footer";

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
		footer={<Footer/>}
		children={children}
	/>
;

export default PublicView;
