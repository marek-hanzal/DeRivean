import React from "react";
import UserHomeIcon from "site/root/module/user/component/icon/UserHomeIcon";
import UserPath from "site/root/module/user/router/UserPath";
import commonMenu from "utils/menu/commonMenu";

const UserMenu = () => commonMenu(
	UserPath.root,
	<UserHomeIcon/>,
	"root.user"
);

export default UserMenu;
