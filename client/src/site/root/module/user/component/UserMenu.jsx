import React from "react";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/UserPath";
import commonMenu from "utils/menu/commonMenu";

const UserMenu = () => commonMenu(
	UserPath.root,
	<UserDashboardIcon/>,
	"root.user"
);

export default UserMenu;
