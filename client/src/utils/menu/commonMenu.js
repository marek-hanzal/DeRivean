import {FormOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined} from "@ant-design/icons";
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
		menuItem(RootPath.root, "root.home", <HomeOutlined/>),
		menuItem(`${root}/home`, `${translation}.home`, icon),
		menuItem(`${root}/create`, `${translation}.create`, <FormOutlined/>),
		menuItem(`${root}/list`, `${translation}.list`, <UnorderedListOutlined/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
	])
]);

export default commonMenu;
