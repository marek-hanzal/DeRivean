import {MehOutlined} from "@ant-design/icons";
import React from "react";
import UserPath from "site/root/module/user/router/UserPath";
import commonMenu from "utils/menu/commonMenu";

const UserMenu = () => commonMenu(
	UserPath.root,
	<MehOutlined/>,
	"root.user"
);

export default UserMenu;
