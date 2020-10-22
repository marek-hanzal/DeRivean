import HomeIcon from "component/icon/HomeIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import UserPath from "site/root/module/user/UserPath";
import RootPath from "site/root/router/RootPath";
import menu from "utils/menu/menu";
import menuItem from "utils/menu/menuItem";

const UserHomeMenu = () => [].concat(
	menu(UserPath.home(), [
		menuItem(RootPath.root, "root.home", <HomeIcon/>),
		menuItem("/user/:user/kingdom/dashboard", "dfsdfdf", <KingdomHomeIcon/>),
	])
);

export default UserHomeMenu;
