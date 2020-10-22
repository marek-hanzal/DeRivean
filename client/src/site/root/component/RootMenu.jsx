import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import React from "react";
import EntityDashboardIcon from "site/root/module/entity/component/icon/EntityDashboardIcon";
import EntityPath from "site/root/module/entity/EntityPath";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/UserPath";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(RootPath.root, [
		menuItem(RootPath.root, "root.home", <HomeIcon/>),
		menuItem(UserPath.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
		menuItem(EntityPath.dashboard, "root.entity.dashboard", <EntityDashboardIcon/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
	]),
]);

export default RootMenu;
