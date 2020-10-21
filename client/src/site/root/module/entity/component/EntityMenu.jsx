import {HomeOutlined, PoweroffOutlined, RobotOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const EntityMenu = () => ([
	menu(EntityPath.root, [
		menuItem(RootPath.root, "root.home", <HomeOutlined/>),
		menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
		menuItem(EntityPath.list, "root.entity.list", <UnorderedListOutlined/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
	])
]);

export default EntityMenu;
