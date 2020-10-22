import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import React from "react";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const commonMenu = (
	root,
	icon,
	translation,
) => ([
	menu(root, [
		menuItem(RootPath.root, "root.home", <HomeIcon/>),
		menuItem(`${root}/dashboard`, `${translation}.dashboard`, icon),
		menuItem(`${root}/create`, `${translation}.create`, <CreateIcon/>),
		menuItem(`${root}/list`, `${translation}.list`, <ListIcon/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
	])
]);

export default commonMenu;
