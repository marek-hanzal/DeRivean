import React from "react";
import UserHomeIcon from "site/root/module/user/component/icon/UserHomeIcon";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const UserBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	UserPath.root,
	<UserHomeIcon/>,
	"root.user"
);

export default UserBreadcrumbs;
