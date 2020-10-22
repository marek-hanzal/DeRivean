import Breadcrumbs from "component/Breadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import SignInIcon from "component/icon/SignInIcon";
import SignUpIcon from "component/icon/SignUpIcon";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import Footer from "site/public/component/Footer";
import Header from "site/public/component/Header";
import PublicPath from "site/public/router/PublicPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
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
					menuItem(PublicPath.root, "public.home", <HomeIcon/>),
					menuItem(PublicPath.signUp, "public.sign-up", <SignUpIcon/>),
					menuItem(PublicPath.signIn, "public.sign-in", <SignInIcon/>),
				])
			]}
		/>}
		breadcrumbs={<Breadcrumbs
			items={[
				breadcrumbs(PublicPath.signUp, [
					breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
					breadcrumbItem(PublicPath.signUp, "public.sign-up", <SignUpIcon/>),
				]),
				breadcrumbs(PublicPath.signIn, [
					breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
					breadcrumbItem(PublicPath.signUp, "public.sign-in", <SignInIcon/>),
				]),
				breadcrumbs(PublicPath.root, [
					breadcrumbSimpleItem(PublicPath.root, <HomeIcon/>),
				]),
			]}
		/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default PublicView;
