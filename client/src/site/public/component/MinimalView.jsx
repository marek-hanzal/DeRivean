import MinimalLayout from "component/MinimalLayout";
import React from "react";
import Footer from "site/public/component/Footer";
import Header from "site/public/component/Header";

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
