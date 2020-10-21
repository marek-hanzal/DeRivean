import {HomeOutlined, MehOutlined, PoweroffOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import CommonLayout from "component/CommonLayout";
import CommonMenu from "component/CommonMenu";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import Footer from "./Footer";
import Header from "./Header";
import RootBreadcrumbs from "./RootBreadcrumbs";

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
		menu={<CommonMenu
			open={open}
			selected={selected}
			items={[
				{
					path: EntityPath.root,
					menu: [
						menuItem(RootPath.root, "root.home", <HomeOutlined/>),
						menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
						menuItem(EntityPath.list, "root.entity.list", <UnorderedListOutlined/>),
						menuDivider(),
						menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
					]
				},
				{
					path: RootPath.root,
					menu: [
						menuItem(RootPath.root, "root.home", <HomeOutlined/>),
						menuItem(UserPath.home, "root.user.home", <MehOutlined/>),
						menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
						menuDivider(),
						menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
					]
				}
			]}
		/>}
		breadcrumbs={<RootBreadcrumbs/>}
		header={<Header/>}
		footer={<Footer/>}
		children={children}
	/>
;

export default RootView;
