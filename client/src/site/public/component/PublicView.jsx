import {FormOutlined, HomeOutlined, LoginOutlined} from "@ant-design/icons";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import Footer from "site/public/component/Footer";
import Header from "site/public/component/Header";
import PublicBreadcrumbs from "site/public/component/PublicBreadcrumbs";
import PublicPath from "site/public/router/PublicPath";
import menu from "utils/menu/menu";
import menuItem from "utils/menu/menuItem";

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
		menu={<Menu
			open={open}
			selected={selected}
			items={[
				menu(PublicPath.root, [
					menuItem(PublicPath.root, "public.home", <HomeOutlined/>),
					menuItem(PublicPath.signUp, "public.sign-up", <FormOutlined/>),
					menuItem(PublicPath.signIn, "public.sign-in", <LoginOutlined/>),
				])
			]}
		/>}
		breadcrumbs={<PublicBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default PublicView;
