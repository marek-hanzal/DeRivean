import {MehOutlined} from "@ant-design/icons";
import React from "react";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import commonBreadcrumbs from "utils/breadcrumbs/commonBreadcrumbs";

const UserBreadcrumbs = () => commonBreadcrumbs(
	RootPath.root,
	UserPath.root,
	<MehOutlined/>,
	"root.user"
);

export default UserBreadcrumbs;
