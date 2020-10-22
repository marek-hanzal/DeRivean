import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import React from "react";
import EntityHomeIcon from "site/root/module/entity/component/icon/EntityHomeIcon";
import EntityPath from "site/root/module/entity/router/EntityPath";
import UserHomeIcon from "site/root/module/user/component/icon/UserHomeIcon";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(RootPath.root, [
		menuItem(RootPath.root, "root.home", <HomeIcon/>),
		menuItem(UserPath.home, "root.user.home", <UserHomeIcon/>),
		menuItem(EntityPath.home, "root.entity.home", <EntityHomeIcon/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
	]),
]);

export default RootMenu;
