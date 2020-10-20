import MinimalLayout from "component/MinimalLayout";
import React from "react";
import Footer from "site/public/component/Footer";
import Header from "site/public/component/Header";
import PublicBreadcrumbs from "site/public/component/PublicBreadcrumbs";

const MinimalView = (
	{
		title,
		subtitle,
		children,
	}) =>
	<MinimalLayout
		title={title}
		subtitle={subtitle}
		breadcrumbs={<PublicBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default MinimalView;
