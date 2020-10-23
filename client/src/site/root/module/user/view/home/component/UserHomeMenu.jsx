import HomeIcon from "component/icon/HomeIcon";
import React from "react";
import KingdomHomeIcon from "site/internal/module/kingdom/component/icon/KingdomHomeIcon";
import RootPath from "site/root/router/RootPath";
import menuItem from "utils/menu/menuItem";

const UserHomeMenu = () => [].concat(
	menuItem(RootPath.root, "root.home", <HomeIcon/>),
	menuItem("/user/:user/kingdom/dashboard", "dfsdfdf", <KingdomHomeIcon/>),
);

export default UserHomeMenu;
