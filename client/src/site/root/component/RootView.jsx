import MainMenu from "./MainMenu";
import RootBreadcrumbs from "./RootBreadcrumbs";
import Footer from "./Footer";
import CommonLayout from "../../../component/CommonLayout";
import React from "react";

const RootView = (
	{
		title,
		open,
		selected,
		children,
	}) =>
	<CommonLayout
		title={title}
		menu={<MainMenu
			open={open}
			selected={selected}
		/>}
		breadcrumbs={<RootBreadcrumbs/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default RootView;
