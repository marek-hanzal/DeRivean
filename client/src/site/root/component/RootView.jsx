import {HomeOutlined, MehOutlined, PoweroffOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import Breadcrumbs from "component/Breadcrumbs";
import Layout from "component/Layout";
import Menu from "component/Menu";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import breadcrumbs from "utils/breadcrumbs/breadcrumbs";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import Footer from "./Footer";
import Header from "./Header";

const RootView = (
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
				menu(EntityPath.root, [
					menuItem(RootPath.root, "root.home", <HomeOutlined/>),
					menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
					menuItem(EntityPath.list, "root.entity.list", <UnorderedListOutlined/>),
					menuDivider(),
					menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
				]),
				menu(RootPath.root, [
					menuItem(RootPath.root, "root.home", <HomeOutlined/>),
					menuItem(UserPath.home, "root.user.home", <MehOutlined/>),
					menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
					menuDivider(),
					menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
				]),
			]}
		/>}
		breadcrumbs={<Breadcrumbs
			items={[
				breadcrumbs(EntityPath.list, [
					breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
					breadcrumbItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
					breadcrumbItem(EntityPath.list, "root.entity.list", <UnorderedListOutlined/>),
				]),
				breadcrumbs(EntityPath.root, [
					breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
					breadcrumbItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
				]),
				breadcrumbs(RootPath.root, [
					breadcrumbSimpleItem(RootPath.root, <HomeOutlined/>),
				]),
			]}
		/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default RootView;
