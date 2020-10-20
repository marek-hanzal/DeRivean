import MinimalLayout from "component/MinimalLayout";
import React from "react";
import Footer from "site/root/component/Footer";
import Header from "site/root/component/Header";

const MinimalView = (
	{
		title,
		subtitle,
		children,
	}) =>
	<MinimalLayout
		title={title}
		subtitle={subtitle}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default MinimalView;
