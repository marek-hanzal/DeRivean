import {HomeOutlined, MehOutlined, PoweroffOutlined, RobotOutlined} from "@ant-design/icons";
import React from "react";
import EntityPath from "site/root/module/entity/router/EntityPath";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menu(RootPath.root, [
		menuItem(RootPath.root, "root.home", <HomeOutlined/>),
		menuItem(UserPath.home, "root.user.home", <MehOutlined/>),
		menuItem(EntityPath.home, "root.entity.home", <RobotOutlined/>),
		menuDivider(),
		menuItem(RootPath.signOut, "root.sign-out", <PoweroffOutlined/>),
	]),
]);

export default RootMenu;
