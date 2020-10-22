import React from "react";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/UserPath";
import UserHomeMenu from "site/root/module/user/view/home/component/UserHomeMenu";
import commonMenu from "utils/menu/commonMenu";

const UserMenu = () => [].concat(
	UserHomeMenu(),
	commonMenu(
		UserPath.root,
		<UserDashboardIcon/>,
		"root.user"
	)
);

export default UserMenu;
